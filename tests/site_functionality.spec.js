import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:5173';

test.describe('Healthy Kids Site Functionality', () => {

  test('navigation and routing', async ({ page }) => {
    // Set to desktop size
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(BASE_URL);
    await expect(page).toHaveTitle(/Healthy Kids/i);

    // Test navigation to Sign Up
    // Select the one in the .actions div which is visible on desktop
    await page.locator('div[class*="actions"] a:has-text("Sign Up")').click();
    await expect(page).toHaveURL(`${BASE_URL}/signup`);
    await expect(page.locator('h1')).toHaveText(/Create an Account/i);

    // Test navigation to BMI Calculator
    await page.locator('nav a:has-text("BMI Calculator")').click();
    await expect(page).toHaveURL(`${BASE_URL}/bmi`);
    await expect(page.locator('h1')).toHaveText(/BMI Calculator/i);

    // Test navigation back to home
    await page.locator('nav a:has-text("Healthy Kids")').click();
    await expect(page).toHaveURL(`${BASE_URL}/`);
  });

  test('BMI calculation logic', async ({ page }) => {
    await page.goto(`${BASE_URL}/bmi`);

    await page.fill('input#height', '180');
    await page.fill('input#weight', '75');
    await page.click('button:has-text("Calculate BMI")');

    const resultValue = await page.locator('[class*="resultValue"]').textContent();
    const category = await page.locator('[class*="category"]').textContent();

    expect(resultValue).toBe('23.1');
    expect(category).toBe('Normal');

    // Test underweight
    await page.fill('input#weight', '50');
    await page.click('button:has-text("Calculate BMI")');
    expect(await page.locator('[class*="category"]').textContent()).toBe('Underweight');

    // Test overweight
    await page.fill('input#weight', '90');
    await page.click('button:has-text("Calculate BMI")');
    expect(await page.locator('[class*="category"]').textContent()).toBe('Overweight');

    // Test obese
    await page.fill('input#weight', '110');
    await page.click('button:has-text("Calculate BMI")');
    expect(await page.locator('[class*="category"]').textContent()).toBe('Obese');
  });

  test('sign up form', async ({ page }) => {
    await page.goto(`${BASE_URL}/signup`);

    await page.fill('input#name', 'John Doe');
    await page.fill('input#email', 'john@example.com');
    await page.fill('input#password', 'password123');
    await page.fill('input#confirmPassword', 'password123');

    // Check if submit button is visible
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('responsiveness - mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);

    // Check if hamburger menu is visible
    const menuToggle = page.locator('[class*="menuToggle"]');
    await expect(menuToggle).toBeVisible();

    // Open menu
    await menuToggle.click();
    const nav = page.locator('[class*="navOpen"]');
    await expect(nav).toBeVisible();

    // Check if mobile actions are visible
    await expect(nav.locator('[class*="mobileActions"]')).toBeVisible();
  });
});
