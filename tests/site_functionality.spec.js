import { test, expect } from '@playwright/test';

test.describe('Healthy Kids App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
  });

  test('navigation to signup page', async ({ page }) => {
    // Navigate to /signup
    await page.goto('http://localhost:5173/signup');
    await expect(page.locator('h1')).toContainText('Join Healthy Kids');
  });

  test('navigation to BMI calculator', async ({ page }) => {
    await page.goto('http://localhost:5173/bmi');
    await expect(page.locator('h1')).toContainText('BMI Calculator');
  });

  test('BMI calculation logic', async ({ page }) => {
    await page.goto('http://localhost:5173/bmi');
    await page.fill('input[placeholder="140"]', '160');
    await page.fill('input[placeholder="45"]', '60');
    await page.click('button:has-text("Calculate BMI")');

    await expect(page.locator('h2')).toContainText('23.4');
    await expect(page.locator('text=Normal')).toBeVisible();
  });

  test('signup form inputs', async ({ page }) => {
    await page.goto('http://localhost:5173/signup');
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('input[name="password"]', 'password123');
    await page.fill('input[name="confirmPassword"]', 'password123');

    expect(await page.inputValue('input[name="name"]')).toBe('John Doe');
    expect(await page.inputValue('input[name="email"]')).toBe('john@example.com');
  });
});
