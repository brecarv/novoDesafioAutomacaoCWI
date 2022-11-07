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
  });
});
