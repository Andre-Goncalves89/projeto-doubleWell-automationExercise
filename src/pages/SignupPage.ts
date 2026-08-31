import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export interface AddressDetails {
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}

export class SignupPage extends BasePage {
    readonly formTitle: Locator;
    readonly formRadioMasc: Locator;
    readonly formRadioFem: Locator;
    readonly fieldName: Locator;
    readonly passwordInput: Locator;
    readonly daysSelector: Locator;
    readonly monthsSelector: Locator;
    readonly yearsSelector: Locator;
    readonly newsLetterCheckbox: Locator;
    readonly specialOffersCheckbox: Locator;
    // Seletores de sessão: Adress information
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly companyInput: Locator;
    readonly address1Input: Locator;
    readonly address2Input: Locator;
    readonly countrySelector: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipCodeInput: Locator;
    readonly mobileNumberInput: Locator;
    // seletor submit
    readonly createAccountButton: Locator;

    constructor(page: Page) {
        super(page)

        this.formTitle = page.locator('.login-form h2 b').first();
        this.formRadioMasc = page.locator('input[id="id_gender1"]');
        this.formRadioFem = page.locator('input[id="id_gender2"]');
        this.fieldName = page.locator('[data-qa="name"]');
        this.passwordInput = page.locator('[data-qa="password"]');
        this.daysSelector = page.locator('[data-qa="days"]');
        this.monthsSelector = page.locator('[data-qa="months"]');
        this.yearsSelector = page.locator('[data-qa="years"]');
        this.newsLetterCheckbox = page.locator('.checkbox [name="newsletter"]');
        this.specialOffersCheckbox = page.locator('#optin');
        this.firstNameInput = page.locator('[data-qa="first_name"]');
        this.lastNameInput = page.locator('[data-qa="last_name"]');
        this.companyInput = page.locator('[data-qa="company"]');
        this.address1Input = page.locator('[data-qa="address"]');
        this.address2Input = page.locator('[data-qa="address2"]');
        this.countrySelector = page.locator('[data-qa="country"]');
        this.stateInput = page.locator('[data-qa="state"]');
        this.cityInput = page.locator('[data-qa="city"]');
        this.zipCodeInput = page.locator('[data-qa="zipcode"]');
        this.mobileNumberInput = page.locator('[data-qa="mobile_number"]');
        this.createAccountButton = page.locator('[data-qa="create-account"]');
    }

    async validateSignupTitle(): Promise<void> {
        this.validateText(this.formTitle, 'Enter Account Information')
    }

    async chooseGender(): Promise<void> {
        await this.clickElement(this.formRadioMasc);
    }

    async typeAccountInformation(name: string, password: string): Promise<void> {
        await this.fillInput(this.fieldName, name);
        await this.fillInput(this.passwordInput, password);
    }

    async chooseBirthday(day: string, month: string, year: string): Promise<void> {
        await this.daysSelector.selectOption(day);
        await this.monthsSelector.selectOption(month)
        await this.yearsSelector.selectOption(year);
    }

    async markCheckBox(): Promise<void> {
        await this.clickElement(this.newsLetterCheckbox);
        await this.clickElement(this.specialOffersCheckbox);
    }

    async fillAddress(details: AddressDetails): Promise<void> {
    await this.fillInput(this.firstNameInput, details.firstName);
    await this.fillInput(this.lastNameInput, details.lastName);
    await this.fillInput(this.companyInput, details.company);
    await this.fillInput(this.address1Input, details.address1);
    await this.fillInput(this.address2Input, details.address2);
    await this.countrySelector.selectOption(details.country);
    await this.fillInput(this.stateInput, details.state);
    await this.fillInput(this.cityInput, details.city);
    await this.fillInput(this.zipCodeInput, details.zipcode);
    await this.fillInput(this.mobileNumberInput, details.mobileNumber);
  }

    async clickCreateAccountSubmit(): Promise<void> {
        await this.clickElement(this.createAccountButton)
    }
}