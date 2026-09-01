import { test } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { LoginPage } from '../src/pages/LoginPage';

test.describe('Logout de usuário', () => {
    test('CT-04 Deve efetuar login e depois logout com sucesso', async({page}) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        // navegando para a pg de Login
        await homePage.navegateToHome();
        await homePage.clickSignupLoginButton();
        // efetuando login
        await loginPage.validateTextSignin();
        await loginPage.fillLoginInput('testqadw@qa.com', 'test123');
        await loginPage.clickLoginButton();
        await loginPage.validateLoggedIn('test qa dw');
        // deslogando da conta
        await loginPage.clickLogoutButton()
        await loginPage.validateTextSignin()
    })
})