import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
test ('Verify Invalid Input Error Message', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('rajat', 'rajat123');
    await expect (loginPage.loginError).toHaveText(/Invalid credentials/);
})