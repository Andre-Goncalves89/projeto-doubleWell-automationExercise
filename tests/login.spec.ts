import { test } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { LoginPage } from '../src/pages/LoginPage';

test.describe('Efetuar Login', () => {
    test('CT02 - Deve realizar login com email e senha já cadastrados', async({page}) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        await homePage.navegateToHome();
        await homePage.clickSignupLoginButton();

        await loginPage.validateTextSignin();
        await loginPage.fillLoginInput('testqadw@qa.com', 'test123');
        await loginPage.clickLoginButton();
        await loginPage.validateLoggedIn('test qa dw');
    })
})

test.describe(' Login incorreto', () => {
    test('CT03 - Deve tentar realizar login com email e senha incorretos', async({page}) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        await homePage.navegateToHome();
        await homePage.clickSignupLoginButton();

        await loginPage.validateTextSignin();
        await loginPage.fillLoginInput('errotest@qa.com', 'erro123');
        await loginPage.clickLoginButton();
        await loginPage.validateErrorMessageLogin();
    })
})