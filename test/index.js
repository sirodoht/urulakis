var chai = require('chai');
var expect = chai.expect;
var req = require('request');

const test = require('ava');

test('Frontpage 200', t => {
  require('../back/app');

  return req.get('http://localhost:3000/', (err, res) => {
    expect(res.statusCode).to.equal(200);
    t.pass();
  });
});
