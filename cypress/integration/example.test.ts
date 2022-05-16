describe("Application", () => {
  it("renders the application", () => {
    cy.visit("/");

    cy.get('[data-test="random-numbers"]').should("be.visible");

    [...Array(6).keys()].forEach((index) => {
      cy.get(`[data-test="random-number-${index}"]`).should("be.visible");
    });

    cy.get('[data-test="controls"]').should("be.visible");

    cy.get('[data-test="minimum-number"]').should("contain.value", 1);

    cy.get('[data-test="maximum-number"]').should("contain.value", 40);

    cy.get('[data-test="number-count"]').should("contain.value", 6);

    cy.get('[data-test="regenerate-random-numbers"]').should("be.visible");
  });

  it("can change the number of random numbers generated", () => {
    cy.visit("/");

    cy.get('[data-test="number-count"]').type("{selectAll}10");

    [...Array(10).keys()].forEach((index) => {
      cy.get(`[data-test="random-number-${index}"]`).should("be.visible");
    });
  });

  it("can change the random-numbers' range", () => {
    cy.visit("/");

    cy.get('[data-test="minimum-number"]').type("{selectAll} 101");
    cy.get('[data-test="maximum-number"]').type("{selectAll} 1001");

    [...Array(6).keys()].forEach((index) => {
      cy.get(`[data-test="random-number-${index}"]`)
        .invoke("text")
        .then((value) => expect(parseInt(value)).to.be.gte(101).and.lte(1001));
    });
  });
});
