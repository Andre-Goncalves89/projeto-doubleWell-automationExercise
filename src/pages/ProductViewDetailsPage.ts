import { Page, Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export interface ProductDetails {
    readonly ProductName: string,
    readonly Category: string,
    readonly Price: string,
    readonly Availability: string,
    readonly Condition: string,
    readonly Brand: string
}

export class ProductViewDetailsPage extends BasePage {
    readonly productName: Locator;
    readonly productCategory: Locator;
    readonly productPrice: Locator;
    readonly productAvailability: Locator;
    readonly productCondition: Locator;
    readonly productBrand: Locator;

    constructor(page: Page) {
        super(page);
        this.productName = page.locator('.product-information h2');
        this.productCategory = page.locator('.product-information p').nth(0);
        this.productPrice = page.locator('.product-information span span');
        this.productAvailability = page.locator('.product-information p', { hasText: 'Availability' });
        this.productCondition = page.locator('.product-information p', { hasText: 'Condition' });
        this.productBrand = page.locator('.product-information p', { hasText: 'Brand' });
    }

    async validateProductName(expectedName: string): Promise<void> {
        await this.validateText(this.productName, expectedName);
    }

    async validateProductCategory(expectedCategory: string): Promise<void> {
        await this.validateText(this.productCategory, expectedCategory);
    }

    async validateProductPrice(expectedPrice: string): Promise<void> {
        await this.validateText(this.productPrice, expectedPrice);
    }

    async validateProductAvailability(expectedAvailability: string): Promise<void> {
        await this.validateText(this.productAvailability, expectedAvailability);
    }

    async validateProductCondition(expectedCondition: string): Promise<void> {
        await this.validateText(this.productCondition, expectedCondition);
    }

    async validateProductBrand(expectedBrand: string): Promise<void> {
        await this.validateText(this.productBrand, expectedBrand);
    }
}