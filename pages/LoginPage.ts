import {Page, Locator} from '@playwright/test';

export class LoginPage {
    readonly page : Page;
    readonly usernameInput : Locator;
    readonly passwordInput : Locator;
    readonly loginButton : Locator;
    readonly usernameError : Locator;
    readonly passwordError : Locator;
    readonly loginError : Locator;
    readonly pageTitle : Locator;

constructor (page : Page){
    this.page =page;
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', {name: " Login "});
    this.usernameError = page.locator('//span[text() ="Required"]').first();
    this.passwordError = page.locator('//span[text() ="Required"]').last();
    this.loginError =page.locator('//p[text() ="Invalid credentials"]');
    this.pageTitle = page.locator('//h6[text()="Dashboard"]');
}

async login (username : string, password : string){
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
}

async goto (){
    await this.page.goto('https://opensource-demo.orangehrmlive.com/');
}
}