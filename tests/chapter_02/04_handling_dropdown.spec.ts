import {test, expect} from '@playwright/test';

test('Handling dropdowns', async ({page})=>{
    await page.goto('https://practice.expandtesting.com/dropdown');
    await page.locator('#country').selectOption('India');
    await page.locator('#country').selectOption('AL');
    await expect(page.locator('#country')).toHaveValue('AL');
    // await expect(page.locator('#country')).toHaveText(['AL', 'India']);
})