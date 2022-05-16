describe("Application", () => {
  it("runs the application", () => {
    cy.visit("/");

    cy.get("body").should("contain.text", "Hello, World!");
  });
});
