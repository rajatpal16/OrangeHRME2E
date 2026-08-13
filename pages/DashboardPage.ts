import {Page, Locator} from '@playwright/test';
export class DashboardPage {
    readonly page : Page;
    readonly assignLeave : Locator;
    readonly leaveList : Locator;
    readonly timeSheets : Locator;
    readonly applyLeave : Locator;
    readonly myLeave : Locator;
    readonly mytimeSheet : Locator;
    readonly assignleaveTitle : Locator;

constructor (page : Page){
    this.page = page;
    this.assignLeave = page.getByRole('button',{name: "Assign Leave"});
    this.leaveList= page.getByRole('button', {name : "Leave List"});
    this.timeSheets = page.getByRole('button', {name :"Timesheets"});
    this.applyLeave = page.getByRole('button' , {name : "Apply Leave"});
    this.myLeave = page.getByRole('button',{name : "My Leave"});
    this.mytimeSheet =page.getByRole('button', {name:"My Timesheet"});
    this.assignleaveTitle =page.locator('//h6[text()="Assign Leave"]');
    }

    async navigateToAssignLeave (){
        await this.assignLeave.click();
    }
    async navigateToLeaveList (){
        await this.leaveList.click();
    }
    async navigateToTimeSheets (){
        await this.timeSheets.click();
    }
    async navigateToApplyLeave (){
        await this.applyLeave.click();
    }
    async navigateToMyLeave (){
        await this.myLeave.click();
    }
    async navigateMyTimesheet (){
        await this.mytimeSheet.click();
    }
}