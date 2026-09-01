import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
    readonly textAllProducts: Locator;
    readonly listFeaturesItems: Locator;
    readonly firstProductViewProductButton: Locator;

    constructor(page: Page) {
        super(page)

        this.textAllProducts = page.locator('.features_items h2.title');
        this.listFeaturesItems = page.locator('.features_items');
        this. firstProductViewProductButton = page.locator('a[href="/product_details/1"]');
    }

    async validateProductPage(): Promise<void> {
        await this.textAllProducts.waitFor({ state: 'visible' });
        await this.validateText(this.textAllProducts, 'All Products');
    }

    async validateListProductVisible(): Promise<void> {
        await expect(this.listFeaturesItems).toBeVisible();
    }

    async clickFirstItemViewProductButton(): Promise<void> {
        this.clickElement(this.firstProductViewProductButton);
    }
}