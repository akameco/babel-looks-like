# babel-looks-like
[![Build Status](https://travis-ci.org/akameco/babel-looks-like.svg?branch=master)](https://travis-ci.org/akameco/babel-looks-like)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> check babel ast


## Install

```
$ npm install babel-looks-like
```


## Usage

```js
const looksLike = require('babel-looks-like')

const a = {x: 1}
const b = {y: 1}

looksLike(a, b)
//=> true
```


## API

### babelLooksLike(a, b)

## License

MIT © [akameco](http://akameco.github.io)
