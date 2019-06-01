const expect = require("chai").expect;
const Calculator = require("../../src/js/lib/Calculator");

describe("Calculator", () => {
  let calculator = null;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it("should have an add function", () => {
    expect(calculator.add).to.exist;
  });

  it("should add 2 + 2 together correctly", () => {
    expect(calculator.add(2, 2)).to.equal(4);
  });
  it("should multiply 3x3 together correctly", () => {
    expect(calculator.multiply(3, 3)).to.equal(9);
  });
  it("should divide 21/7 together correctly", () => {
    expect(calculator.divide(21, 7)).to.equal(3);
  });
  it("should subtract 10-5 together correctly", () => {
    expect(calculator.subtract(10, 5)).to.equal(5);
  });
});
