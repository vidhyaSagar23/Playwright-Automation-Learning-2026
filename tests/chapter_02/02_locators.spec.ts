import { test } from '@playwright/test';

test('Locators', async ({ page }) => {
    await page.goto('https://github.com/vidhyaSagar23');

    // Click the "Sign In" link using a getByRole locator
    await page.getByRole('link', {name: 'Sign In'}).click();

    // Click the "Github logo" using the label
    // await page.getByLabel('Homepage', {exact:true}).first().click();

    // click by get alt text
    // await page.getByAltText("View vidhyaSagar23's full-sized avatar").click();

    // click by test id
    // await page.getByTestId('repositories').first().click();

    // get by text
    // await page.getByText('Sign up').first().click();

    // get By placeholder
    // await page.getByPlaceholder('Search or jump to...').click();

    // get by xpath, css selectors, by title
    // await page.locator('xpath=//a[contains(@href, "explore")]').click();
    // await page.locator('css=a[href="/explore"]').click();
    // await page.locator('[title="Explore"]').click();
})