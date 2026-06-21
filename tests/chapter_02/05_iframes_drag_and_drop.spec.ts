import {test} from '@playwright/test';

test('drag and drop inside iframes', async ({page})=>{
    await page.goto("http://jqueryui.com/droppable/")

    const demoIframe = page.frameLocator('.demo-frame');

    const draggable = demoIframe.locator('#draggable');
    const droppable = demoIframe.locator('#droppable');

    await draggable.dragTo(droppable);
})