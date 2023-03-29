


describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });


  it.only("get the list item that contains the text Tuesday and clicks on it", () => {
    cy.visit("/");
    cy.contains("[data-testid=day]", "Tuesday")
      .click()
      .should("have.class", "day-list__item--selected");
  });
});