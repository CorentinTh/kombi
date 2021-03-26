
<div align="center">

  ![logo](.github/logo.png)
  
</div>


<div align="center">

  [![Weekly Downloads](https://img.shields.io/npm/dw/kombi.svg)](https://www.npmjs.com/package/kombi) 
  [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/CorentinTh/kombi/Node%20CI)](https://github.com/CorentinTh/kombi/actions?query=workflow%3A%22Node+CI%22) 
  [![codecov](https://codecov.io/gh/CorentinTh/kombi/branch/main/graph/badge.svg?token=ESAWKEROML)](https://codecov.io/gh/CorentinTh/kombi)
  [![npm bundle size](https://img.shields.io/bundlephobia/minzip/kombi.svg)](https://www.npmjs.com/package/kombi) 
  [![GitHub package.json version](https://img.shields.io/github/package-json/v/CorentinTh/kombi.svg)](https://github.com/CorentinTh/kombi/blob/master/package.json) 
  [![Dependencies](https://img.shields.io/badge/dependencies-0-green)](https://www.npmjs.com/package/kombi) 
  [![Licence Badge](https://img.shields.io/github/license/CorentinTh/kombi.svg)](LICENSE)
    
</div>

Simple object and array cartesian combination generator (for node, typescript and the browser). Kombi will generate every combination between the sets of value given as parameters.

## Installation
### JS / Typescript / Node JS
**Kombi** can be installed using yarn or npm.

```bash
npm install kombi
# or
yarn add kombi
```

And import :

```javascript
// EMAScript import
import {kombi} from 'kombi';

// Or Common JS:
const {kombi} = require('kombi');

// and used...

const obj = {
  a: [1, 2, 3],
  b: ['a', 'b']
}

const mergedObj = kombi(obj)

console.log(mergedObj)

/*
[
  {a: 1, b: 'a'},
  {a: 1, b: 'b'},
  {a: 2, b: 'a'},
  {a: 2, b: 'b'},
  {a: 3, b: 'a'},
  {a: 3, b: 'b'},
]
*/
```
### Browser

You can use the CDN:
```html
<script src="https://unpkg.com/kombi"></script>
```
And everything is globally accessible and **prefixed with `Kombi`**:
```javascript
const kombi = new Kombi.kombi(obj)
```

## Usage
### Combinate object with array properties

```javascript
const result = kombi({
    a: [1, 2, 3, 4],
    b: ['a', 'b', 'c', 'd'],
})

/*
result = [
    {a: 1, b: 'a'}, {a: 1, b: 'b'}, {a: 1, b: 'c'}, {a: 1, b: 'd'},
    {a: 2, b: 'a'}, {a: 2, b: 'b'}, {a: 2, b: 'c'}, {a: 2, b: 'd'},
    {a: 3, b: 'a'}, {a: 3, b: 'b'}, {a: 3, b: 'c'}, {a: 3, b: 'd'},
    {a: 4, b: 'a'}, {a: 4, b: 'b'}, {a: 4, b: 'c'}, {a: 4, b: 'd'}
]
*/
```

### Combinate array of arrays

```javascript
const result = kombi([
    [1, 2, 3, 4],
    ['a', 'b', 'c'],
])

/*
result = [
  [1, 'a'], [1, 'b'], [1, 'c'], 
  [2, 'a'], [2, 'b'], [2, 'c'], 
  [3, 'a'], [3, 'b'], [3, 'c'], 
  [4, 'a'], [4, 'b'], [4, 'c']
]
*/
```
## Roadmap
* Improve documentation
* Add more unit test
* Allow single parameters as input, like :
```javascript
const result = kombi({
    a: [1, 2, 3, 4],
    b: ['a', 'b', 'c', 'd'],
    c: 'foo'
})
```
* Create benchmark
## Contribute
**Pull requests are welcome !** Feel free to contribute.

## Credits
Coded with ❤️ by [Corentin Thomasset](//corentin-thomasset.fr).

## License

This project is under the [MIT license](LICENSE).

