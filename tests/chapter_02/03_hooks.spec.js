import { test } from '@playwright/test';

test.beforeAll(async () => {
    console.log('This will run before All test');
})

test.afterAll(async () => {
    console.log('This will run after All test');
});

test.beforeEach(async ({page}) => {
    console.log('Executing before each test');
    await page.goto('https://github.com/vidhyaSagar23');
});

test.afterEach(async () => {
    console.log('Executing after each test');
});

test('Locators - sign in link', async ({ page }) => {
    console.log('test1');
    // Click the "Sign In" link using a getByRole locator
    await page.getByRole('link', { name: 'Sign In' }).click();
})

test('Locators - homepage logo', async ({ page }) => {
    console.log('test2');
    // Click the "Github logo" using the label
    await page.getByLabel('Homepage', { exact: true }).first().click();
})