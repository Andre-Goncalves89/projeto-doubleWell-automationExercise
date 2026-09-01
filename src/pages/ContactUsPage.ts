import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContactUsPage extends BasePage {
    readonly contactUsTitle: Locator;
    readonly fieldNameContactForm: Locator;
    readonly fieldEmailContactForm: Locator;
    readonly fieldSubjectForm: Locator;
    readonly fieldMessageForm: Locator;
    readonly uploadFileFormButton: Locator;
    readonly submitFormButton: Locator;
    readonly messageSucess: Locator;
    readonly homeButtonReturn: Locator;

    constructor(page: Page) {
        super(page)

        this.contactUsTitle = page.locator('[class="title text-center"]').first();
        this.fieldNameContactForm = page.locator('[data-qa="name"]');
        this.fieldEmailContactForm = page.locator('[data-qa="email"]');
        this.fieldSubjectForm = page.locator('[data-qa="subject"]');
        this.fieldMessageForm = page.locator('[data-qa="message"]');
        this.uploadFileFormButton = page.locator('[name="upload_file"]');
        this.submitFormButton = page.locator('[data-qa="submit-button"]');
        this.messageSucess = page.locator('.status.alert-success');
        this.homeButtonReturn = page.locator('[class="btn btn-success"]');
    }

    async validateContactUsTitle(): Promise<void> {
        await this.validateText(this.contactUsTitle, 'Contact Us')
    }

    async fillContactUsForm(name: string, email: string, subject: string, messsage: string): Promise<void> {
        await this.fillInput(this.fieldNameContactForm, name);
        await this.fillInput(this.fieldEmailContactForm, email);
        await this.fillInput(this.fieldSubjectForm, subject);
        await this.fillInput(this.fieldMessageForm, messsage);
    }

    async uploadFile(filePath: string): Promise<void> {
        await this.uploadFileFormButton.setInputFiles(filePath);
    }

    async clickContactUsSubmitButton(): Promise<void> {
        const dialogPromise = new Promise<void>((resolve) => {
            this.page.once('dialog', async dialog => {
                await dialog.accept();
                resolve();
            });
        });

        await this.submitFormButton.evaluate(element => (element as HTMLElement).click());
        await dialogPromise;
    
        // Em vez de esperar a rede inteira (networkidle), esperamos apenas o elemento de sucesso nascer no DOM
        await this.page.locator('status-alert-success').waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
    }

    async validateSuccessSubmitMessage(): Promise<void> {
        await this.validateText(this.messageSucess, 'Success! Your details have been submitted successfully.')
    }

    async clickReturnHomeButton(): Promise<void> {
        await this.clickElement(this.homeButtonReturn);
    }
}