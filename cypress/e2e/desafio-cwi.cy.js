/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

describe("Desafio Automação Web - CWI", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve cadastrar uma conta de usuário", () => {
    cy.visit("/customer/account/create/");

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email(firstName);
    let password = "pDdM<$$2331@";
    let company = faker.company.name();
    let address1 = faker.address.streetAddress();
    let city = faker.address.city();
    let zipCode = faker.address.zipCode("#####");
    let phone = faker.phone.number("904 ### ####");

    // pageAccountCreate - PersonalInformation
    cy.get("#firstname").type(firstName);
    cy.get("#lastname").type(lastName);

    // pageAccountCreate - SignInInformation
    cy.get("#email_address").type(email);
    cy.get("#password").type(password);
    cy.get("#password-confirmation").type(password);

    // pageAccountCreate - Confirmation
    cy.get("button[title='Create an Account']").click();

    cy.get(".message-success").should("exist");
    cy.get("[data-ui-id='page-title-wrapper']").should(
      "contain.text",
      "My Account"
    );

    // pageCustomerAccount - Address Book / Default Billing Address
    cy.get("[data-ui-id='default-billing-edit-link']").click();

    // pageCustomerAddress - Add New Address / Contact Information
    cy.get("#firstname").clear().type(firstName);
    cy.get("#lastname").clear().type(lastName);
    cy.get("#company").type(company);
    cy.get("#telephone").type(phone);

    // pageCustomerAddress - Add New Address / Address
    cy.get("#street_1").clear().type(address1);
    cy.get("#city").clear().type(city);
    cy.get("#region_id").select("18").should("have.value", "18");
    cy.get("#zip").type(zipCode);
    cy.get("#country").select("US").should("have.value", "US");

    // pageCustomerAddress - Confirmation
    cy.get("[data-action='save-address']").click();

    cy.get("[data-ui-id='message-success']").should("exist");

    // pageCustomerAccount - My Account
    cy.get("#block-collapsible-nav li:nth-child(1)").click();
  });
});
