import {test} from '@playwright/test';

test('Keyboard actions', async({page})=>{
    await page.goto('https://www.google.com/')
    await page.getByRole("combobox").first().fill('testers talk')
    await page.keyboard.press('Enter')
    await page.getByRole("combobox").first().click()
    await page.keyboard.press('Control+a')
    await page.keyboard.press('Control+x')
    await page.keyboard.press('Control+v')
})