import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
test ('Verify empty Password field, Error Message', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('admin', '');
    await expect (loginPage.passwordError).toHaveText(/Required/);
     
})