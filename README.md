# array-complement

> Returns an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference) of the provided arrays.

# Install

```bash
npm install array-complement
```

```bash
bower install array-complement
```
# Usage

```javascript
const arrayComplement = require('array-complement');

console.log(arrayComplement(['foo','bar'], ['bar'])); // ['foo']
console.log(arrayComplement(['foo','bar','qux'],['qux','baz'],['thud','norf','bar'])); // ['foo','baz','thud','norf']
```

# Test

```bash
npm test
```

# License

MIT
