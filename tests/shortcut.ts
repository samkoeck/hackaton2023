import { test, expect } from '@playwright/test';

test('first secret , schortcut', async ({ page }) => {
await page.setViewportSize({ width: 1280  , height: 660 });
  await page.goto('https://dusbez5zif8yv.cloudfront.net/');
  await page.mouse.click(1050, 202)
//   await page.click('canvas', {position: {x: 1684, y: 371}});
});