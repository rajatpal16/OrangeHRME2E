import {test , expect } from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import {DashboardPage} from '../../pages/DashboardPage';

test ('Verify assign leave page', async({page}) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage (page);
    await loginPage.goto();
    await dashboardPage.navigateToAssignLeave();
    await expect (page).toHaveURL(/leave\/assignLeave/);
    await expect (dashboardPage.assignleaveTitle).toHaveText(/Assign Leave/);
})