import {test, expect} from '@playwright/test';

test("generate test steps in report", async({page}) => {

        await test.step('open github application', async()=>{
        await page.goto('https://github.com/');
    })

        await test.step('Click sign in link', async()=>{
        await page.getByRole('link', { name: 'Sign in' }).click();
    })

        await test.step('Enter login credentials', async()=>{
        await page.getByRole('textbox', { name: 'Username or email address' }).click();
        await page.getByRole('textbox', { name: 'Username or email address' }).fill('vidhyas');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('aagar');
    })

        await test.step('Click sign in button', async()=>{
        await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    })

        await test.step('Validating error message', async()=>{
        await expect(page.getByRole('alert')).toContainText('test Incorrect username or password.');
    })
})