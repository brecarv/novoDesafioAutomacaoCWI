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

  it.only("Deve cadastrar uma conta de usuário", () => {
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

    accountCreationPage.visit();
    accountCreationPage.createAccount(firstName, lastName, email, password);
    cy.get(".message-success").should("exist");
    cy.get("[data-ui-id='page-title-wrapper']").should(
      "contain.text",
      "My Account"
    );

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
    //cy.get("#block-collapsible-nav li:nth-child(1)").click();
    myAccountPage.visit();
    cy.get("[data-ui-id='page-title-wrapper']").should(
      "contain.text",
      "My Account"
    );
  });

  it.skip("teste botao", () => {
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

    //homePage.visitMyAccountPage();
  });
});
