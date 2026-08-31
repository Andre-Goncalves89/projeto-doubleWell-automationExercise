import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    readonly signupNameInput: Locator;
    readonly signupEmailInput: Locator;
    readonly signupTitle: Locator;
    readonly signupButton: Locator;
    readonly signinEmailInput: Locator;
    readonly signinPasswordInput: Locator;
    readonly signinButton: Locator;
    readonly signinTitle: Locator;
    readonly loggedAsMessage: Locator;
    readonly errorMessageRed: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        super(page)

        this.signupNameInput = page.locator('[data-qa="signup-name"]');
        this.signupEmailInput = page.locator('[data-qa="signup-email"]');
        this.signupButton = page.locator('[data-qa="signup-button"]');
        this.signupTitle = page.locator('.signup-form h2');
        this.signinEmailInput = page.locator('[data-qa="login-email"]');
        this.signinPasswordInput = page.locator('[data-qa="login-password"]');
        this.signinButton = page.locator('[data-qa="login-button"]');
        this.signinTitle = page.locator('.login-form h2');
        this.loggedAsMessage = page.locator('li:has-text("Logged in as")');
        this.errorMessageRed = page.locator('p[style="color: red;"]');
        this.logoutButton = page.locator('a[href="/logout"]')

    }

    async validateTextSignup(): Promise<void> {
        await this.validateText(this.signupTitle, 'New User Signup!');
    }

    async fillInitialInput(name: string, email: string): Promise<void> {
        await this.fillInput(this.signupNameInput, name);
        await this.fillInput(this.signupEmailInput, email);
    }

    async clickSignupButton(): Promise<void> {
        await this.clickElement(this.signupButton);
    }

    async validateTextSignin(): Promise<void> {
        await this.validateText(this.signinTitle, 'Login to your account');
    }

    async fillLoginInput(email: string, password: string): Promise<void> {
        await this.fillInput(this.signinEmailInput, email);
        await this.fillInput(this.signinPasswordInput, password);
    }

    async clickLoginButton(): Promise<void> {
        await this.clickElement(this.signinButton);
    }

    async validateLoggedIn(userName: string): Promise<void> {
        await this.validateText(this.loggedAsMessage, `Logged in as ${userName}`);
    }

    async validateErrorMessageLogin(): Promise<void> {
        await this.validateText(this.errorMessageRed, 'Your email or password is incorrect!');    
    }

    async validateErrorMessageEmailAlreadyExist(): Promise<void> {
        await this.validateText(this.errorMessageRed, 'Email Address already exist!')
    }

    async clickLogoutButton(): Promise<void> {
        await this.clickElement(this.logoutButton);
    }
}