const { test, expect } = require('@playwright/test');
const fs = require('fs');

test.use({ retries: 1, trace: 'on-first-retry' });

test('saucedemo: login -> add to cart -> checkout -> logout', async ({ page }) => {
  fs.mkdirSync('manual-tests/screenshots', { recursive: true });
  await page.goto('https://www.saucedemo.com');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL(/inventory.html/);

  const firstAdd = page.locator('.inventory_item button').first();
  await firstAdd.click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  await page.click('.shopping_cart_link');
  await expect(page).toHaveURL(/cart.html/);
  await expect(page.locator('.cart_item')).toHaveCount(1);

  await page.click('button:has-text("Checkout")');
  await expect(page).toHaveURL(/checkout-step-one.html/);
  await page.fill('#first-name', 'Test');
  await page.fill('#last-name', 'User');
  await page.fill('#postal-code', '12345');
  // Debug: save page HTML and screenshot to diagnose missing Continue button
  await fs.promises.writeFile('manual-tests/screenshots/checkout-step-one.html', await page.content());
  await page.screenshot({ path: 'manual-tests/screenshots/checkout-step-one.png', fullPage: true });
  await page.waitForSelector('#continue', { state: 'visible', timeout: 10000 });
  await page.click('#continue');
  await expect(page).toHaveURL(/checkout-step-two.html/);
  await page.click('button:has-text("Finish")');
  await expect(page).toHaveURL(/checkout-complete.html/);
  await expect(page.locator('.complete-header')).toContainText(/THANK YOU/i);

  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');
  await expect(page).toHaveURL('https://www.saucedemo.com/');

  await page.screenshot({ path: 'manual-tests/screenshots/saucedemo-final.png', fullPage: true });
});
