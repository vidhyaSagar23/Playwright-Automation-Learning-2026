import {test} from '@playwright/test';

test('mouse actions', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/practice")

    // await page.getByText('All Access Subscription').click({button:'left'})

    // await page.getByText('All Access Subscription').click({button: 'middle'})

    // await page.getByText('All Access Subscription').click({button: 'right'})

    // await page.getByText('All Access Subscription').dblclick()

    // await page.getByText('All Access Subscription').click({clickCount: 3})

    await page.getByText('All Access Subscription').hover()

    await page.waitForTimeout(3000);


})