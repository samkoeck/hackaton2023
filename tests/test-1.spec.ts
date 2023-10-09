import { test, expect } from '@playwright/test';

test('empty field secret', async ({ page }) => {
    await page.goto('https://dusbez5zif8yv.cloudfront.net/');
    await page.getByRole('button', { name: 'Start the adventure!' }).click();
    await page.getByRole('button', { name: 'Start your journey' }).click();
    await page.getByRole('button', { name: 'Ye sure starting here?' }).click();
    await page.getByPlaceholder('Your name please!').click();
    await page.getByPlaceholder('Your name please!').press('Enter');
});

test('bbb in name secret', async ({ page }) => {
    await page.goto('https://dusbez5zif8yv.cloudfront.net/');
    await page.getByRole('button', { name: 'Start the adventure!' }).click();
    await page.getByRole('button', { name: 'Start your journey' }).click();
    await page.getByRole('button', { name: 'Ye sure starting here?' }).click();
    await page.getByPlaceholder('Your name please!').click();
    await page.getByPlaceholder('Your name please!').fill('BBB');
    await page.getByPlaceholder('Your name please!').press('Enter');
    await page.getByText('Yeah').click();
});

test('space in name secret', async ({ page }) => {
    await page.goto('https://dusbez5zif8yv.cloudfront.net/');
    await page.getByRole('button', { name: 'Start the adventure!' }).click();
    await page.getByRole('button', { name: 'Start your journey' }).click();
    await page.getByRole('button', { name: 'Ye sure starting here?' }).click();
    await page.getByPlaceholder('Your name please!').click();
    await page.getByPlaceholder('Your name please!').fill(' ');
    await page.getByPlaceholder('Your name please!').press('Enter');
    await page.getByText('Yeah').click();
});

test('sixth page secret', async ({ page }) => {
    await page.goto('https://dusbez5zif8yv.cloudfront.net/sixth-page');
});

test('local storage name', async ({ page }) => {
    await page.goto('https://dusbez5zif8yv.cloudfront.net/');
    await page.getByRole('button', { name: 'Start the adventure!' }).click();
    await page.getByRole('button', { name: 'Start your journey' }).click();
    await page.getByRole('button', { name: 'Ye sure starting here?' }).click();
    await page.getByPlaceholder('Your name please!').click();
    await page.getByPlaceholder('Your name please!').fill('blabla');
    await page.getByPlaceholder('Your name please!').press('Enter');
    await page.getByText('Yeah').click(); 
    await page.goto('https://dusbez5zif8yv.cloudfront.net/fifth-page');
    await page.evaluate(() => window.localStorage.setItem('username', 'my name'));
    await page.evaluate(() =>window.location.reload());
});