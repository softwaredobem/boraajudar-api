const index = require('./index')
const expect = require('chai').expect
const sinon = require('sinon')

describe('IndexController', () => {
  it('should return friendly message on index', () => {
    const req = {}
    const res = {
      send: sinon.spy()
    }
    index.index(req, res)
    expect(res.send.calledOnce).to.be.true
    expect(res.send.calledWith('BoraAjudarAPI')).to.be.true
  })
})