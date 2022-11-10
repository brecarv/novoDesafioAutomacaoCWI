class HomePage {
  linkLogin = "[href*='account/login']";
  linkCreateAnAccount = "[href*='account/create']";

  visit() {
    cy.visit("/");
  }

  visitLoginPage() {
    this.visit();
    cy.get(this.linkLogin).first().click();
  }

  visitCreateAccountPage() {
    this.visit();
    cy.get(this.linkCreateAnAccount).first().click();
  }
}

export default HomePage;
