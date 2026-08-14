import {Page, Locator} from '@playwright/test';
export class AssignLeavePage {
    readonly page : Page;
    readonly employeeName : Locator;
    readonly leaveType : Locator;
    readonly fromDate : Locator;
    readonly toDate : Locator;
    readonly commentsBox : Locator;
    readonly Assign : Locator
    readonly leaveDuration : Locator;

    constructor (page: Page) {
        this.page = page;
        this.employeeName = page.getByPlaceholder('Type for hints...');
        this.leaveType = page.locator('//div[@class="oxd-select-text-input"]');
        this.fromDate = page.getByPlaceholder('dd-mm-yyyy').first();
        this.toDate = page.getByPlaceholder('dd-mm-yyyy').last();
        this.leaveDuration = page.locator('.oxd-select-text-input').last();
        this.commentsBox = page.locator('//textarea[contains(@class, "textarea")]');
        this.Assign = page.getByRole('button', {name:" Assign "});

    }
    async selectEmployeeName (name : string){
        await this.employeeName.click();
        await this.employeeName.pressSequentially(name ,{delay :100})
        //wait for autocomplete dropdown option to appear
        const suggestion = this.page.getByRole('option',{name});
        await suggestion.first().waitFor({state:"visible"});
        await suggestion.first().click();
    }
    async selectLeaveType (leavetype :string){
        await this.leaveType.click();
        const option = this.page.locator('.oxd-select-dropdown',{hasText:leavetype});
        await option.waitFor({state:"visible"});
        await option.click();
    }
    async selectLeaveDuration (duration:string){
        await this.leaveDuration.click();
        const option = this.page.locator('//div[contains(@class,"oxd-select-dropdown")]',
            {hasText:duration});
        await option.waitFor({state:"visible"});
        await option.click();
    }
   
}