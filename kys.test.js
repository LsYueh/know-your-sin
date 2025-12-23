import { test } from 'tap';

import * as kys from 'kys';


/**------+---------+---------+---------+---------+---------+---------+----------
 * Tests
---------+---------+---------+---------+---------+---------+---------+--------*/
test('Know-Your-SIN', async (t) => {
  t.test('parse()', async (t) => {
    t.equal(kys.parse(), null);
  });
});
