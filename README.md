# Define Static Method

[![Version][version-badge]][npm]
[![License][license-badge]][license]
[![Build][build-badge]][travis]
[![Coverage][coverage-badge]][coveralls]
[![Dependencies][dependencies-badge]][gemnasium]

**Define Static Method** is a simple utility for defining a static method in
ES5 with the same [property descriptor][descriptor] as an [ES2015 class][class]
method.

## Install

Install with [npm][npm]:

```sh
npm install --save define-static-method
```

## Usage

In ES2015, we might do this:

```js
class Squid {
  constructor(name) {
    this.name = name;
  }
  static createVladimir() {
    return new Squid('Vladimir');
  }
}
```

In ES5, we can do this:

```js
var defineStatic = require('define-static-method');

function Squid(name) {
  this.name = name;
}

defineStatic(Squid, 'createVladimir', function() {
  return new Squid('Vladimir');
});
```

And here is Vladimir:

```js
Squid.createVladimir().name; // -> 'Vladimir'
```

## API

#### `defineStaticMethod(constructor, prop, method)`

| Param | Type | Description |
| :---- | :--- | :---------- |
| constructor | `function` | The constructor function the method will be added to |
| prop | `string` | The property name of the method |
| method | `function` | The static method to add |

## License

Copyright &copy; 2016 Akim McMath. Licensed under the [MIT License][license].

[version-badge]: https://img.shields.io/npm/v/define-static-method.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/define-static-method.svg?style=flat-square
[build-badge]: https://img.shields.io/travis/akim-mcmath/define-static-method/master.svg?style=flat-square
[coverage-badge]: https://img.shields.io/coveralls/akim-mcmath/define-static-method/master.svg?style=flat-square&service=github
[dependencies-badge]: https://img.shields.io/gemnasium/akim-mcmath/define-static-method.svg?style=flat-square
[npm]: https://www.npmjs.com/package/define-static-method
[license]: LICENSE
[travis]: https://travis-ci.org/akim-mcmath/define-static-method
[coveralls]: https://coveralls.io/github/akim-mcmath/define-static-method?branch=master
[gemnasium]: https://gemnasium.com/akim-mcmath/define-static-method
[descriptor]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
[class]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes
