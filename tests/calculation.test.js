const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictequals = require('../calculation')

describe('calculation', () => {
  describe('strictequals', () => {
    it('returns true if the values are the same and does not type coerce', () => {
      //create test data 
      const num1 = 1
      const num2 = '1'
      //call the function
      const checkvalue = strictequals(num1, num2)
      //make assertions 
      expect(checkvalue).to.equal(false)
    })
  })
})

describe('calculation', () => {
  describe('strictequals', () => {
    it('returns true becasue it is the same type and same value', () => {
      //create test data 
      const num1 = '1'
      const num2 = '1'
      //call the function
      const checkvalue = strictequals(num1, num2)
      //make assertions 
      expect(checkvalue).to.equal(true)
    })
  })
})

describe('calculation', () => {
  describe('strictequals', () => {
    it('returns true becasue it is the same type and same value', () => {
      //create test data 
      const num1 = 'a'
      const num2 = 1
      //call the function
      const checkvalue = strictequals(num1, num2)
      //make assertions 
      expect(checkvalue).to.equal(false)
    })
  })
})

describe('calculation', () => {
  describe('strictequals', () => {
    it('returns true if it is the same type and different value', () => {
      //create test data 
      const num1 = 'aa'
      const num2 = 'ab'
      //call the function
      const checkvalue = strictequals(num1, num2)
      //make assertions 
      expect(checkvalue).to.equal(false)
    })
  })
})

