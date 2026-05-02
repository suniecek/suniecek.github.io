const fs = require('fs');

// Mock DOM environment
global.document = {
    getElementById: jest.fn(),
    createElement: jest.fn(),
    querySelector: jest.fn(),
    addEventListener: jest.fn()
};
global.alert = jest.fn();
global.window = {
    addEventListener: jest.fn(),
    querySelector: jest.fn(),
    innerWidth: 1024,
    innerHeight: 768
};
global.setInterval = jest.fn();
global.setTimeout = jest.fn();
const RealDate = Date;
global.Date = class extends RealDate {
    constructor(...args) {
        if (args.length) {
            super(...args);
        } else {
            super();
        }
    }
};
global.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn()
};

const mockElement = {
    style: {},
    textContent: '',
    innerHTML: '',
    appendChild: jest.fn(),
    insertBefore: jest.fn(),
    addEventListener: jest.fn(),
    classList: { add: jest.fn(), remove: jest.fn() },
    setAttribute: jest.fn(),
    removeAttribute: jest.fn(),
    value: '',
    getContext: jest.fn(() => ({}))
};

document.getElementById.mockImplementation((id) => {
    if (id === 'gameCanvas' || id === 'paintCanvas') {
        return mockElement;
    }
    return mockElement;
});
document.querySelector.mockImplementation(() => mockElement);
document.createElement.mockImplementation(() => mockElement);

// Evaluate script.js
const scriptContent = fs.readFileSync('script.js', 'utf8');
eval(scriptContent);

describe('Guestbook Form Validation', () => {
    let mockNameInput, mockMessageInput, mockErrorContainer;

    beforeEach(() => {
        jest.clearAllMocks();

        mockNameInput = {
            ...mockElement,
            value: '',
            style: {},
            setAttribute: jest.fn(),
            removeAttribute: jest.fn()
        };
        mockMessageInput = {
            ...mockElement,
            value: '',
            style: {},
            setAttribute: jest.fn(),
            removeAttribute: jest.fn()
        };
        mockErrorContainer = {
            ...mockElement,
            style: {},
            textContent: ''
        };

        document.getElementById.mockImplementation((id) => {
            if (id === 'guestName') return mockNameInput;
            if (id === 'guestMessage') return mockMessageInput;
            if (id === 'guestbookError') return mockErrorContainer;
            return mockElement;
        });
    });

    test('shows error when both fields are empty', () => {
        addGuestbookEntry();
        expect(mockErrorContainer.style.display).toBe('block');
        expect(mockNameInput.style.border).toBe('2px solid red');
        expect(mockMessageInput.style.border).toBe('2px solid red');
        expect(mockNameInput.setAttribute).toHaveBeenCalledWith('aria-invalid', 'true');
        expect(mockMessageInput.setAttribute).toHaveBeenCalledWith('aria-invalid', 'true');
    });

    test('shows error when name is empty', () => {
        mockMessageInput.value = 'Hello!';
        addGuestbookEntry();
        expect(mockErrorContainer.style.display).toBe('block');
        expect(mockNameInput.style.border).toBe('2px solid red');
        expect(mockMessageInput.style.border).toBe('');
    });

    test('clears errors on successful submission', () => {
        mockNameInput.value = 'John';
        mockMessageInput.value = 'Hello!';
        addGuestbookEntry();
        expect(mockErrorContainer.style.display).toBe('none');
        expect(mockNameInput.style.border).toBe('');
        expect(mockMessageInput.style.border).toBe('');
        expect(mockNameInput.removeAttribute).toHaveBeenCalledWith('aria-invalid');
        expect(mockMessageInput.removeAttribute).toHaveBeenCalledWith('aria-invalid');
    });
});
