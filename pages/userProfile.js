import { eventNames } from "process";

export class UserProfilePage{
    constructor(page){
        this.page=page

        this.firstNameSelector = '#firstName';
        this.lastNameSelector = '#lastName';
        this.emailSelector = '#email';
        this.passwordSelector = '#password';
        this.confirmPasswordSelector = '#confirmPassword';
        this.dateOfBirthSelector = '#dob';
        this.phoneNumberSelector = '#phone';
        this.linkedInUrlSelector = '#linkedIn';
        this.gitHubUrlSelector = '#github';
        this.addressSelector = '#address';
        this.submitButtonSelector='input[type="submit"]'
       this.alertSelector = 'p[class="success"]'
       
    }
        async fillFirstName(firstName) {
        await this.page.fill(this.firstNameSelector, firstName);
    }

    async fillLastName(lastName) {
        await this.page.fill(this.lastNameSelector, lastName);
    }

    async fillEmail(email) {
        await this.page.fill(this.emailSelector, email);
    }

    async fillPassword(password) {
        await this.page.fill(this.passwordSelector, password);
    }

    async fillConfirmPassword(confirmPassword) {
        await this.page.fill(this.confirmPasswordSelector, confirmPassword);
    }

    async fillDateOfBirth(dateOfBirth) {
        await this.page.fill(this.dateOfBirthSelector, dateOfBirth);
    }

    async fillPhoneNumber(phoneNumber) {
        await this.page.fill(this.phoneNumberSelector, phoneNumber);
    }

    async fillLinkedInUrl(linkedInUrl) {
        await this.page.fill(this.linkedInUrlSelector, linkedInUrl);
    }

    async fillGitHubUrl(gitHubUrl) {
        await this.page.fill(this.gitHubUrlSelector, gitHubUrl);
    }
    async fillAddress(address) {
        await this.page.fill(this.addressSelector, address);
    }
async clickSubmitButton(){
 await this.page.click(this.submitButtonSelector)
}

}