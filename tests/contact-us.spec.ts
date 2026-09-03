import { test } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { ContactUsPage } from '../src/pages/ContactUsPage';

test.describe('Contact Us', () => {
    test.beforeEach(async ({ page }) => {
        // Bloqueia domínios de anúncios e trackers que poluem o console e quebram a execução
        await page.route('**/*.{png,jpg,jpeg}', route => route.continue()); 
        await page.route('**/*googlesyndication.com*', route => route.abort());
        await page.route('**/*google-analytics.com*', route => route.abort());
        await page.route('**/*adservice.google.com*', route => route.abort());
    });

    test('CT06 - Deve preencher e validar formulário da página contact us', async({page}) => {
        const homePage = new HomePage(page);
        const contactUsPage = new ContactUsPage(page);

        await homePage.navegateToHome();
        await homePage.clickContactusButton();

        await contactUsPage.validateContactUsTitle();
        await contactUsPage.fillContactUsForm('Usuário QA', 'testqa@qa.com', 'Suporte Técnico - Teste Automatizado',
             'Mensagem de teste automatizado enviada via formulário de contato.');
        await contactUsPage.uploadFile('./src/fixtures/sample.txt');
        await contactUsPage.clickContactUsSubmitButton();
        await contactUsPage.validateSuccessSubmitMessage();
        await contactUsPage.clickReturnHomeButton();

        await homePage.validateHomePage();
    })
})

