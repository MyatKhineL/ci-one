import { test, expect } from '@playwright/test';

test.describe('Counter Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display initial count of 0', async ({ page }) => {
    const countDisplay = page.getByTestId('count-display');
    await expect(countDisplay).toContainText('Counter: 0');
  });

  test('should increment count when increment button is clicked', async ({ page }) => {
    const incrementButton = page.getByTestId('increment-button');
    const countDisplay = page.getByTestId('count-display');

    await incrementButton.click();
    await expect(countDisplay).toContainText('Counter: 1');

    await incrementButton.click();
    await expect(countDisplay).toContainText('Counter: 2');
  });

  test('should decrement count when decrement button is clicked', async ({ page }) => {
    const decrementButton = page.getByTestId('decrement-button');
    const countDisplay = page.getByTestId('count-display');

    await decrementButton.click();
    await expect(countDisplay).toContainText('Counter: -1');

    await decrementButton.click();
    await expect(countDisplay).toContainText('Counter: -2');
  });

  test('should handle multiple increment and decrement operations', async ({ page }) => {
    const incrementButton = page.getByTestId('increment-button');
    const decrementButton = page.getByTestId('decrement-button');
    const countDisplay = page.getByTestId('count-display');

    await incrementButton.click();
    await incrementButton.click();
    await decrementButton.click();
    await expect(countDisplay).toContainText('Counter: 1');
  });
}); 