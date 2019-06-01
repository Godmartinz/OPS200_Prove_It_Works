const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage= null;
    
    beforeEach(() => {
        mortgage = new Mortgage();
    });
    it("create a Monthly Payment function", () =>{
        expect(mortgage.monthlyPayment).to.exist;
    });
    it("expect principal to hold a value", () =>{
        expect(mortgage.principal).to.not.equal(null);
    });
    it("expect interest to hold a value", () =>{
        expect(mortgage.interest).to.not.be.null;
    });
    it("expect term to hold a value", () =>{
        expect(mortgage.term).to.not.be.null;
    });
    it("expect period to hold a value", () =>{
        expect(mortgage.period).to.not.be.null;
    });
    
    
});