import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Playwright by Testers Talk YouTube · Testers Talk 30.2K+ followers' }).click();
  await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full' })).toBeVisible();
  await expect(page.getByRole('link', { name: '#2 Playwright API Testing' })).toBeVisible();
  await expect(page.locator('yt-item-section-renderer')).toContainText('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial');
});