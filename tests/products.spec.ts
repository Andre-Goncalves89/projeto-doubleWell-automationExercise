import { test } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { ProductsPage } from '../src/pages/ProductsPage';
import { ProductViewDetailsPage } from '../src/pages/ProductViewDetailsPage';

test.describe('Navegar na página Products', () => {
    test.beforeEach(async ({ page }) => {
        // Bloqueia domínios de anúncios e trackers que poluem a tela e causam flakiness
        await page.route('**/*.{png,jpg,jpeg}', route => route.continue());
        await page.route('**/*googlesyndication.com*', route => route.abort());
        await page.route('**/*google-analytics.com*', route => route.abort());
        await page.route('**/*adservice.google.com*', route => route.abort());
    });

    test('CT08- Deve navegar para página Porducts e clicar para inspecionar detalhes de um produto',
        async ({page}) => {
            const homePage = new HomePage(page);
            const productsPage = new ProductsPage(page);
            const productViewDetailsPage = new ProductViewDetailsPage(page);

            //navegando para a pg products
            await homePage.navegateToHome();
            //await homePage.clickProductsPage();
            await homePage.navegateTo('/products')

            //validando elementos na pg
            await productsPage.validateProductPage();
            await productsPage.validateListProductVisible();

            //await productsPage.clickFirstItemViewProductButton();
            //validando elementos do item em item-details
            await productViewDetailsPage.navegateTo('/product_details/1');
            await productViewDetailsPage.validateProductName('Blue Top');
            await productViewDetailsPage.validateProductCategory('Category: Women > Tops');
            await productViewDetailsPage.validateProductPrice('Rs. 500');
            await productViewDetailsPage.validateProductAvailability('Availability: In Stock');
            await productViewDetailsPage.validateProductCondition('Condition: New');
            await productViewDetailsPage.validateProductBrand('Brand: Polo');
        }
    );
});