const fs = require('fs');
const path = require('path');

// Mock localStorage
global.localStorage = {
  store: {},
  getItem(key) { return this.store[key] || null; },
  setItem(key, value) { this.store[key] = value; }
};

// Mock timers
global.setInterval = jest.fn();
global.setTimeout = jest.fn();

// Minimal DOM implementation for script.js
class MockElement {
  constructor(id) {
    this.id = id;
    this.value = '';
    this.textContent = '';
    this.innerHTML = '';
    this.classList = {
      classes: new Set(),
      add: jest.fn(c => this.classList.classes.add(c)),
      remove: jest.fn(c => this.classList.classes.delete(c)),
      toggle: jest.fn(c => {
        if (this.classList.classes.has(c)) {
          this.classList.classes.delete(c);
        } else {
          this.classList.classes.add(c);
        }
      })
    };
    this.style = {};
    this.children = [];
    this.attributes = {};
  }

  setAttribute(name, value) {
    this.attributes[name] = value;
  }

  removeAttribute(name) {
    delete this.attributes[name];
  }

  getAttribute(name) {
    return this.attributes[name] || null;
  }

  addEventListener() {}
  insertBefore(newNode, refNode) {
    this.children.unshift(newNode);
    this.firstChild = newNode;
  }
  querySelector() { return new MockElement('mock'); }
  getContext() {
    return {
      fillRect: jest.fn(),
      clearRect: jest.fn(),
      fillStyle: '',
      beginPath: jest.fn(),
      arc: jest.fn(),
      fill: jest.fn()
    };
  }
}

global.window = {
  addEventListener: jest.fn(),
  innerWidth: 1024
};

const elements = {};
global.document = {
  getElementById: jest.fn(id => {
    if (!elements[id]) {
      elements[id] = new MockElement(id);
    }
    return elements[id];
  }),
  createElement: jest.fn(tag => new MockElement('new-' + tag)),
  addEventListener: jest.fn(),
  querySelectorAll: jest.fn(() => []),
  querySelector: jest.fn(() => new MockElement('mock'))
};

// Mock Image
global.Image = class {
  constructor() {
    this.src = '';
  }
};

// Load script.js
const scriptCode = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');
eval(scriptCode);

describe('addGuestbookEntry UX Enhancements', () => {
  beforeEach(() => {
    // Reset local storage
    global.localStorage.store = {};

    // Reset elements for guestbook
    elements['guestName'] = new MockElement('guestName');
    elements['guestMessage'] = new MockElement('guestMessage');
    elements['guestbookError'] = new MockElement('guestbookError');
    elements['guestbookEntries'] = new MockElement('guestbookEntries');

    // Initial state
    elements['guestbookError'].style.display = 'none';
  });

  test('shows inline accessible error when fields are empty', () => {
    elements['guestName'].value = '';
    elements['guestMessage'].value = '';

    // Call function
    addGuestbookEntry();

    const errorEl = elements['guestbookError'];
    const nameEl = elements['guestName'];
    const msgEl = elements['guestMessage'];

    expect(errorEl.style.display).toBe('block');
    expect(errorEl.textContent).toBe('please fill in both fields!');
    expect(nameEl.getAttribute('aria-invalid')).toBe('true');
    expect(msgEl.getAttribute('aria-invalid')).toBe('true');
  });

  test('successfully adds entry and clears accessible error states', () => {
    elements['guestName'].value = 'Test User';
    elements['guestMessage'].value = 'Hello world!';

    // Set previous error state to verify it clears
    elements['guestbookError'].style.display = 'block';
    elements['guestName'].setAttribute('aria-invalid', 'true');
    elements['guestMessage'].setAttribute('aria-invalid', 'true');

    addGuestbookEntry();

    const errorEl = elements['guestbookError'];
    const nameEl = elements['guestName'];
    const msgEl = elements['guestMessage'];

    // Validates inputs were cleared
    expect(nameEl.value).toBe('');
    expect(msgEl.value).toBe('');

    // Validates accessible error states cleared
    expect(errorEl.style.display).toBe('none');
    expect(nameEl.getAttribute('aria-invalid')).toBeNull();
    expect(msgEl.getAttribute('aria-invalid')).toBeNull();

    // Validates entry was added
    expect(elements['guestbookEntries'].children.length).toBe(1);

    // Validates local storage
    const stored = JSON.parse(global.localStorage.getItem('guestbookEntries'));
    expect(stored.length).toBeGreaterThan(0);
    expect(stored[0].name).toBe('Test User');
    expect(stored[0].message).toBe('Hello world!');
  });
});
