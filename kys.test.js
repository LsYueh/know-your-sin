'use strict'

const { test } = require('tap');

const kys = require('./');


/**------+---------+---------+---------+---------+---------+---------+----------
 * Tests
---------+---------+---------+---------+---------+---------+---------+--------*/
test('Know-Your-SIN', async (t) => {
  t.test('parse()', async (t) => {
    t.equal(kys.parse(), null);
  });
});
