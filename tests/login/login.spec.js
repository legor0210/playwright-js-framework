const testData = require('../../testData/users');
const { test, expect } = require('@playwright/test');

test.describe('Login Feature Tests', () => {
  // Basic page tests
  test('should display login page title', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle("Swag Labs");
  });

  test('should have username field', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator('#user-name')).toBeVisible();
  });

  // Dynamic login tests using external test data
  test.describe('User Login Tests', () => {
    testData.forEach(user => {
      test(`Login test for ${user.username}`, async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.fill('#user-name', user.username);
        await page.fill('#password', user.password);
        await page.click('#login-button');
        
        // Handle different expected outcomes based on user type
        if (user.username === 'locked_out_user') {
          await expect(page).toHaveURL('https://www.saucedemo.com/');
          await expect(page.locator('[data-test="error"]')).toContainText('locked out');
        } else {
          await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        }
      });
    });
  });
});