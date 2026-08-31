import { test } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { LoginPage } from '../src/pages/LoginPage';
import { SignupPage } from '../src/pages/SignupPage';
import { AccountCreatedPage } from '../src/pages/AccountCreatedPage';

test.describe('CT01 - Cadastro de Usuário', () => {
  test('Deve realizar o cadastro de um usuário com sucesso', async ({page}) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const signupPage = new SignupPage(page);
    const accountCreatedPage = new AccountCreatedPage(page);

    //e-mail único dinâmico para evitar que o teste falhe por 'Email já cadastrado'
    const timestamp = Date.now();
    const dynamicEmail = `andre_qa_${timestamp}@test.com`

    // Navegando para a página de login/cadastro
    await homePage.navegateToHome();
    await homePage.clickSignupLoginButton();
    // Digitando campos para ser direcionado a pg de cadastro
    await loginPage.validateTextSignup();
    await loginPage.fillInitialInput('Andrezao', dynamicEmail);
    await loginPage.clickSignupButton();

    await signupPage.validateSignupTitle();
    await signupPage.chooseGender();
    await signupPage.typeAccountInformation('Andrezinho', 'test123');
    await signupPage.chooseBirthday('10', 'April', '2010');
    await signupPage.markCheckBox();
    // Preenchendo campos de endereço com objeto refatorado
    await signupPage.fillAddress({
      firstName: 'Andre',
      lastName: 'QA',
      company: 'DoubleWell',
      address1: 'rua do Pudim',
      address2: 'bloco A',
      country: 'Israel',
      state: 'South State',
      city: 'city of Israel',
      zipcode: '10100-000',
      mobileNumber: '88977776666'
    });

    await signupPage.clickCreateAccountSubmit();
    await accountCreatedPage.validateAccountCreated();
    await accountCreatedPage.clickContinueButton();

  })

  test('Deve buscar realizar cadastro com email já existente registrado', async({page}) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.navegateToHome();
    await homePage.clickSignupLoginButton();
    await loginPage.validateTextSignup();

    await loginPage.fillInitialInput('Test de QA', 'testqadw@qa.com')
    await loginPage.clickSignupButton();
    await loginPage.validateErrorMessageEmailAlreadyExist();
  })
})