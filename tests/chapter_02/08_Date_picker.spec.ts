import {test} from '@playwright/test';

test('Keyboard actions', async({page})=>{
    await page.goto('https://jqueryui.com/datepicker/')

    const demoIframe = page.frameLocator('.demo-frame');

    // hardcoded Date
    await demoIframe.locator('#datepicker').click()
    // await demoIframe.locator('#datepicker').fill('06/06/2024')

    // dynamic date
    // await demoIframe.locator('.ui-datepicker-today').click()

    // previous date
    // await demoIframe.locator('[title="Prev"]').click()
    // await demoIframe.getByText('8', {exact:true}).click()

    // future date
    await demoIframe.locator('[title="Next"]').click()
    await demoIframe.getByText('8', {exact:true}).click()
})