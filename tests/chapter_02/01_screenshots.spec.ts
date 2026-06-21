import {test} from '@playwright/test';

test("Screenshots", async({page})=>{
    await page.goto('https://www.flipkart.com/');

    // element level screenshot
    await page.getByRole('button', { name: 'Request OTP' }).screenshot({ path: './screenshots/request_otp.png' });

    // page level screenshot
    await page.screenshot({path: './screenshots/page.png'})

    // Full page level screenshot
    await page.screenshot({path:'./screenshots/fullpage.png', fullPage: true})
  
})
