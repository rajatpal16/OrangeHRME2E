import {test, expect} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';
import {DashboardPage} from '../../pages/DashboardPage';
import {AssignLeavePage} from '../../pages/AssignLeavePage';
import {EntitlementPage} from '../../pages/EntitlementPage';
test.beforeEach(async({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
})

test ('Verify Add Entitlement Page', async ({page}) => {
    const dashboardPage = new DashboardPage(page);
    const assignLeavePage = new AssignLeavePage (page);
    const entitlementPage = new EntitlementPage(page);

    await dashboardPage.navigateToAssignLeave();
    await entitlementPage.selectEntitlementType('Add Entitlements');
    await expect(page).toHaveURL(/leave\/addLeaveEntitlement/);
    await expect(entitlementPage.pageTitle).toHaveText(/Add Leave Entitlement/);
    await entitlementPage.selectEmployeeName('Charles Carter');
    await entitlementPage.selectLeaveType('CAN - Vacation');
    await entitlementPage.selectLeavePeriod('2026-01-01 - 2026-31-12');
    await entitlementPage.entitlementDays(10);
    await entitlementPage.clickSave();
    await entitlementPage.clickConfirmButton();
    await expect(page).toHaveURL(/leave\/viewLeaveEntitlements/);



})