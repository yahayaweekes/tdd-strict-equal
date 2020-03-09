const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../comparison')

describe('Comparison', () => {
  describe('strictEqual', () => {
    it('returns true when given two parameters of the same type and same value', () => {
      const result = strictEqual(5, 5)

      expect(result).to.equal(true)
    })

    it('returns false when given two parameters of the different type and same value', () => {
      const result = strictEqual('5', 5)

      expect(result).to.equal(false)
    })

    it('returns false when given two parameters of the same type and different value', () => {
      const result = strictEqual(5, 6)

      expect(result).to.equal(false)
    })

    it('returns false when given two parameters of the different type and different value', () => { 
      const result = strictEqual(5, 'a')

      expect(result).to.equal(false)
    })
  })
})
