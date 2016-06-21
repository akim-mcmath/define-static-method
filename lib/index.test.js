'use strict';

var chai = require('chai');
var defineStatic = require('./');

before(function() {
  chai.should();
});

describe('defineStaticMethod(constructor, prop, method)', function() {
  var Squid, createVladimir;

  beforeEach(function() {
    Squid = function(name) { this.name = name; };
    createVladimir = function() { return new Squid('Vladimir'); };
    defineStatic(Squid, 'createVladimir', createVladimir);
  });

  it('is the main module', function() {
    defineStatic.should.equal(require('../'));
  });

  it('adds @method to @constructor', function() {
    Squid.should.have.property('createVladimir', createVladimir);
  });

  specify('method has the correct property descriptor', function() {
    var desc = Object.getOwnPropertyDescriptor(Squid, 'createVladimir');
    desc.configurable.should.be.true;
    desc.enumerable.should.be.false;
    desc.writable.should.be.true;
  });

  specify('method can be used on constructor', function() {
    Squid.createVladimir().should.have.property('name', 'Vladimir');
  });

});
