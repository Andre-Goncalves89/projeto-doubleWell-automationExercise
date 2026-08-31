import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountCreatedPage extends BasePage {
    readonly titleMessage: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        super(page)

        this.titleMessage = page.locator('[data-qa="account-created"]');
        this.continueButton = page.locator('[data-qa="continue-button"]');
    }

    async validateAccountCreated(): Promise<void> {
        await this.validateText(this.titleMessage, 'Account Created!')
    }

    async clickContinueButton(): Promise<void> {
        await this.clickElement(this.continueButton);
    }
}