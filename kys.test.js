import { test } from 'tap';

import * as kys from 'kys';


/**------+---------+---------+---------+---------+---------+---------+----------
 * Tests
---------+---------+---------+---------+---------+---------+---------+--------*/
test('Know-Your-SIN', async (t) => {
  t.test('parse()', async (t) => {
    t.throws(() => kys.parse());
    t.throws(() => kys.parse({stockNo: '', indCode: ''}));

    t.equal(kys.parse({stockNo: '      ', indCode: '  '}), null);
    t.equal(kys.parse({stockNo: '      ', indCode: '00'}), null);
  });
});
