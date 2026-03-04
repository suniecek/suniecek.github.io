const { chromium } = require('playwright');
const path = require('path');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    const filePath = `file://${path.join(__dirname, 'index.html')}`;

    await page.goto(filePath);

    // Check initial state
    let startBtn = await page.$('.start-button');
    let ariaExpanded = await startBtn.getAttribute('aria-expanded');
    console.log(`Initial aria-expanded: ${ariaExpanded}`);

    // Simulate keyboard enter to open menu
    await startBtn.focus();
    await page.keyboard.press('Enter');

    // Check state after opening
    await page.waitForTimeout(500); // Give JS time to execute
    ariaExpanded = await startBtn.getAttribute('aria-expanded');
    console.log(`aria-expanded after opening: ${ariaExpanded}`);

    // Close using Space
    await page.keyboard.press(' ');
    await page.waitForTimeout(500);
    ariaExpanded = await startBtn.getAttribute('aria-expanded');
    console.log(`aria-expanded after closing: ${ariaExpanded}`);

    // Take a screenshot
    await page.screenshot({ path: 'screenshot.png' });

    await browser.close();
})();
