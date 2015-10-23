var test = require('tape');
var arrayComplement = require('../array-complement');

test('arrayComplement', function (t) {
  'use strict';

  t.plan(6);

  t.deepEqual(arrayComplement('foo','bar'), []);
  t.deepEqual(arrayComplement(), []);
  t.deepEqual(arrayComplement(['foo','bar','qux'],['qux','baz'],['thud','norf','bar']), ['foo','baz','thud','norf']);
  t.deepEqual(arrayComplement(['foo','bar'], 2, null, 'bar'), ['foo','bar']);
  t.deepEqual(arrayComplement(['foo','bar'], 2, null, ['bar']), ['foo']);
  t.deepEqual(arrayComplement(null, ['foo','bar']), ['foo','bar']);
});
