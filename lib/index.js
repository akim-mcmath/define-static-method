'use strict';

function defineStaticMethod(ctor, prop, method) {
  Object.defineProperty(ctor, prop, {
    configurable: true,
    writable: true,
    value: method
  });
}

module.exports = defineStaticMethod;
