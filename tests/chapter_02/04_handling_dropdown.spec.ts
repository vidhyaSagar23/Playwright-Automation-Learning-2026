import {test} from '@playwright/test';

test('Handling dropdowns', async ({page})=>{
    await page.goto('https://practice.expandtesting.com/dropdown');
    await page.locator('#country').selectOption('India');
    await page.locator('#country').selectOption('AL');
})