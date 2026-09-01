import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class TestCasePage extends BasePage {
    readonly titleValidate: Locator;

    constructor(page: Page) {
        super(page);

        this.titleValidate = page.locator('h2 b');
    }

    async validateTitlePage(): Promise<void> {
        await this.validateText(this.titleValidate, 'Test Cases')
    }
}