import { test } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { TestCasePage } from '../src/pages/TestCasePage';

test.describe('Navegar para página test-case', () => {
    test('CT07 - Deve navegar para a página tes-case com sucesso', async({page}) => {
        const homePage = new HomePage(page);
        const testCasePage = new TestCasePage(page);

        await homePage.navegateToHome();
        //await homePage.clickTestCaseButton();
        await homePage.navegateTo('/test_cases');

        await testCasePage.validateTitlePage();
    })
})