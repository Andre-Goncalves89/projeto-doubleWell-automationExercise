import { Page, Locator, expect } from '@playwright/test';

export abstract class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navegateTo(path: string = '/'): Promise<void> {
        await this.page.goto(path);
    }

    async fillInput(locator: Locator, value: string): Promise<void> {
        await locator.waitFor({state: 'visible'});
        await locator.fill(value);
    }

    async clickElement(locator: Locator): Promise<void> {
        await locator.waitFor({state: 'visible'});
        await locator.click();
    }

    async validateText(locator: Locator, expectedText: string): Promise<void> {
        await expect(locator).toBeVisible();
        await expect(locator).toContainText(expectedText);    
    }
}