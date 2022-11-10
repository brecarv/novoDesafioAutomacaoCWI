class MyAccountPage {
  url = "/customer/account";
  linkBillingAddressEdit = "[data-ui-id='default-billing-edit-link']";
  buttonSaveAddress = "[data-action='save-address']";
  inputFirstName = "#firstname";
  inputLastName = "#lastname";
  inputCompany = "#company";
  inputPhone = "#telephone";
  inputAddress = "#street_1";
  inputCity = "#city";
  inputState = "#region_id";
  inputZipCode = "#zip";
  inputCountry = "#country";

  visitPage() {
    cy.visit(this.url);
  }

  fillContactInformation(firstName, lastName, company, phone) {
    cy.get(this.inputFirstName).clear().type(firstName);
    cy.get(this.inputLastName).clear().type(lastName);
    cy.get(this.inputCompany).clear().type(company);
    cy.get(this.inputPhone).clear().type(phone);
  }

  fillAddressInformation(address, city, state, zipCode, country) {
    cy.get(this.inputAddress).clear().type(address);
    cy.get(this.inputCity).clear().type(city);
    cy.get(this.inputState).select(state).should("have.value", state);
    cy.get(this.inputZipCode).type(zipCode);
    cy.get(this.inputCountry).select(country).should("have.value", country);
  }

  addDefaultBillingAddress(
    firstName,
    lastName,
    company,
    phone,
    address,
    city,
    state,
    zipCode,
    country
  ) {
    cy.get(this.linkBillingAddressEdit).click();
    this.fillContactInformation(firstName, lastName, company, phone);
    this.fillAddressInformation(address, city, state, zipCode, country);
    cy.get(this.buttonSaveAddress).click();
  }
}

export default MyAccountPage;
