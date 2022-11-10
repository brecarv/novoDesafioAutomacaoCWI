/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import HomePage from "../pages/home-page";
import AccountCreationPage from "../pages/account-creation-page";
import MyAccountPage from "../pages/my-account-page";

describe("Desafio Automação Web - CWI", () => {
  const accountCreationPage = new AccountCreationPage();
  const myAccountPage = new MyAccountPage();
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve cadastrar uma conta de usuário", () => {
    accountCreationPage.visitPage();

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email(firstName);
    let password = "pDdM<$$2331@";
    let company = faker.company.name();
    let address = faker.address.streetAddress();
    let city = faker.address.city();
    let zipCode = faker.address.zipCode("#####");
    let phone = faker.phone.number("904 ### ####");
    let state = "18";
    let country = "US";

    // pageAccountCreate - PersonalInformation - 1.1 fillPersonalInformation
    // cy.get("#firstname").type(firstName);
    // cy.get("#lastname").type(lastName);

    // pageAccountCreate - SignInInformation - 1.2 fillSignInInformation
    // cy.get("#email_address").type(email);
    // cy.get("#password").type(password);
    // cy.get("#password-confirmation").type(password);

    // pageAccountCreate - Confirmation - 1.3 createAccount
    // cy.get("button[title='Create an Account']").click();

    accountCreationPage.createAccount(firstName, lastName, email, password);

    cy.get(".message-success").should("exist");
    cy.get("[data-ui-id='page-title-wrapper']").should(
      "contain.text",
      "My Account"
    );

    // pageCustomerAccount - Address Book / Default Billing Address
    //cy.get("[data-ui-id='default-billing-edit-link']").click();
    myAccountPage.visitPage();

    // pageCustomerAddress - Add New Address / Contact Information
    // cy.get("#firstname").clear().type(firstName);
    // cy.get("#lastname").clear().type(lastName);
    // cy.get("#company").type(company);
    // cy.get("#telephone").type(phone);

    // pageCustomerAddress - Add New Address / Address
    // cy.get("#street_1").clear().type(address1);
    // cy.get("#city").clear().type(city);
    // cy.get("#region_id").select("18").should("have.value", "18");
    // cy.get("#zip").type(zipCode);
    // cy.get("#country").select("US").should("have.value", "US");

    // pageCustomerAddress - Confirmation
    // cy.get("[data-action='save-address']").click();

    myAccountPage.addDefaultBillingAddress(
      firstName,
      lastName,
      company,
      phone,
      address,
      city,
      state,
      zipCode,
      country
    );

    cy.get("[data-ui-id='message-success']").should("exist");

    // pageCustomerAccount - My Account
    cy.get("#block-collapsible-nav li:nth-child(1)").click();

    cy.get("[data-ui-id='page-title-wrapper']").should(
      "contain.text",
      "My Account"
    );
  });

  it.only("teste botao", () => {
    // Seletor Create Account .header.links > li:nth-child(3)
    //cy.get(".header.links > li:nth-child(3)").first().click();
    homePage.visitLoginPage();
    cy.get("[data-ui-id='page-title-wrapper']").should(
      "contain.text",
      "Customer Login"
    );

    homePage.visitCreateAccountPage();
    cy.get("[data-ui-id='page-title-wrapper']").should(
      "contain.text",
      "Create New Customer Account"
    );

    homePage.visit();
  });
});
