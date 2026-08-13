import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
test ('Verify both field have no input, Error Message', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', '');
    await expect (loginPage.usernameError).toHaveText(/Required/);
     
})