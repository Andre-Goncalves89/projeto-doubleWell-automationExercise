import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    readonly logoImage: Locator;
    readonly signupLoginButton: Locator;

    constructor(page: Page) {
        super(page)

        this.logoImage = page.locator('.logo img');
        this.signupLoginButton = page.locator('a[href="/login"]');
    }

    async navegateToHome(): Promise<void> {
        await this.navegateTo('/')
        await this.logoImage.waitFor({state: 'visible'})
    }

    async clickSignupLoginButton(): Promise<void> {
        this.clickElement(this.signupLoginButton)
    }
}