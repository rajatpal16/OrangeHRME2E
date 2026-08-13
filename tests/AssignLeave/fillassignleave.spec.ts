import {test, expect} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import {DashboardPage} from '../../pages/DashboardPage';
import {AssignLeavePage} from '../../pages/AssignLeavePage';

test('fill the employee name field', async ({page}) => {
    const loginPage = new LoginPage(page);
    const dashboardPage =new DashboardPage(page);
    const assignLeavePage = new AssignLeavePage(page);
    await loginPage.goto();
    await dashboardPage.navigateToAssignLeave();
    await assignLeavePage.selectEmployeeName('Ranga  Akunuri');
    await assignLeavePage.selectLeaveType('CAN - FMLA');
    

})