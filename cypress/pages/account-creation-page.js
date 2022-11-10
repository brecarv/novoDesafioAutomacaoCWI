import HomePage from "./home-page";

class AccountCreationPage {
  inputFirstName = "#firstname";
  inputLastName = "#lastname";
  inputEmail = "#email_address";
  inputPassword = "#password";
  inputPasswordConfirmation = "#password-confirmation";
  buttonCreateAnAccount = "button[title='Create an Account']";

  visit() {
    HomePage.visitCreateAccountPage();
  }

  fillPersonalInformation(firstName, lastName) {
    cy.get(this.inputFirstName).type(firstName);
    cy.get(this.inputLastName).type(lastName);
  }

  fillSignupInformation(email, password) {
    cy.get(this.inputEmail).type(email);
    cy.get(this.inputPassword).type(password);
    cy.get(this.inputPasswordConfirmation).type(password);
  }

  createAccount(firstName, lastName, email, password) {
    this.fillPersonalInformation(firstName, lastName);
    this.fillSignupInformation(email, password);
    cy.get(this.buttonCreateAnAccount).click();
  }
}

export default AccountCreationPage;
