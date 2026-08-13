import {test as setup} from '@playwright/test';
setup ('Authentication', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.getByPlaceholder('Username').fill('admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name: " Login "}).click();
    await page.context().storageState({path:'Auth/user\.json'})
})