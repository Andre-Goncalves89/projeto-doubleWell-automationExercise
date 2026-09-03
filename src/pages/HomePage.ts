import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    readonly logoImage: Locator;
    readonly signupLoginButton: Locator;
    readonly testCaseButton: Locator;
    readonly contactusButton: Locator;
    readonly homeValidate: Locator;
    readonly productsButton: Locator;

    constructor(page: Page) {
        super(page)

        this.logoImage = page.locator('.logo img');
        this.signupLoginButton = page.locator('a[href="/login"]');
        this.testCaseButton = page.locator('[href="/test_cases"]').first();
        this.contactusButton = page.locator('a[href="/contact_us"]');
        this.homeValidate = page.locator('[class="carousel-inner"]').first();
        this.productsButton = page.locator('[href="/products"]');
    }

    async navegateToHome(): Promise<void> {
        await this.navegateTo('/')
        await this.logoImage.waitFor({state: 'visible'})
    }

    async clickSignupLoginButton(): Promise<void> {
        this.clickElement(this.signupLoginButton)
    }

    async clickTestCaseButton(): Promise<void> {
        await this.clickElement(this.testCaseButton);
    }

    async clickContactusButton(): Promise<void> {
        await this.clickElement(this.contactusButton);
    }

    async clickProductsPage(): Promise<void> {
        await this.clickElement(this.productsButton);
    }

    async validateHomePage(): Promise<void> {
        await this.homeValidate.isVisible();
    }
}