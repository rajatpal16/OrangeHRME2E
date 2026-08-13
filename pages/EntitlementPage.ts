import {Page, Locator} from '@playwright/test';
export class EntitlementPage {
    readonly page : Page;
    readonly entitlementsType :Locator;
    readonly pageTitle: Locator; ////p[text()="Add Leave Entitlement"]
    readonly employeeName : Locator;
    readonly empNameError : Locator;
    readonly leaveType : Locator;
    readonly leavePeriod : Locator;
    readonly entitlementInput : Locator;
    readonly saveButton : Locator;
    readonly confirmButton : Locator;
    constructor (page : Page){
        this.page = page;
        this.entitlementsType = page.locator('//span[text() = "Entitlements "]');
        this.pageTitle =page.locator('//p[text()="Add Leave Entitlement"]');
        this.empNameError = page.locator('//span[text() = "Required"]').first();
        this.employeeName = page.getByPlaceholder('Type for hints...');
        this.leaveType = page.locator('.oxd-select-text-input').first();
        this.leavePeriod = page.locator('.oxd-select-text-input').last();
        this.entitlementInput = this.page.locator('.oxd-input-group').
        filter({ hasText: 'Entitlement' }).locator('input');
        this.saveButton = page.getByRole('button',{name: 'Save'});
        this.confirmButton = page.getByRole('button',{name:"Confirm"});
    }
    async selectEntitlementType (name: string){
        await this.entitlementsType.click();
        const option = this.page.getByRole('menuitem',{name});
        await option.waitFor({state:"visible"});
        await option.click();
    }
    async selectEmployeeName (name:string){
        await this.employeeName.click();
        await this.employeeName.fill(name);
        const option = this.page.getByRole('option',{name});
        await option.waitFor({state : "visible"});
        await option.click();
    }
    async selectLeaveType (name:string){
        await this.leaveType.click();
        const option = this.page.getByRole('option',{name});
        await option.waitFor({state:"visible"});
        await option.click();
    }

    async selectLeavePeriod (name:string){
        await this.leavePeriod.click();
        const option = this.page.getByRole('option',{name});
        await option.waitFor({state:"visible"});
        await option.click();
    }
    async entitlementDays(days: number) {
    await this.entitlementInput.fill(days.toString());
}
    async clickSave (){
        await this.saveButton.click();
    }
    async clickConfirmButton(){
        await this.confirmButton.click();
    }

}