class HomePage {
  linkLogin = "[href*='account/login']";
  linkCreateAnAccount = "[href*='account/create']";
  buttonOpenCustomerMenu = "[data-action='customer-menu-toggle']";
  linkCustomerMenuMyAccount = "[href$='/customer/account/']";

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

  visitMyAccountPage() {
    cy.get(this.buttonOpenCustomerMenu).first().click();
    cy.get(this.linkCustomerMenuMyAccount).first().click();
  }
}

export default HomePage;
