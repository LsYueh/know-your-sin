import * as equity from './industry-code/equity.js';
import * as financial from './industry-code/financial.js';

/**------+---------+---------+---------+---------+---------+---------+----------
 * Exports
---------+---------+---------+---------+---------+---------+---------+--------*/

/**
 * Parse the security type from the given SIN.
 * @param {object} input 
 * @param {string} input.stockNo The STOCK-NO (SIN) to parse.
 * @param {string} input.indCode IND-CODE (產業別代碼).
 * @return {object|null} The security type code, or undefined if not recognized.
 */
export function parse(input) {
  const { stockNo, indCode } = input || {};

  if (stockNo === undefined) return null;
  if (indCode === undefined) return null;

  if (typeof stockNo !== 'string' || stockNo.length > 6) return null;
  if (typeof indCode !== 'string' || indCode.length !== 2) return null;

  return (indCode !== '00') ? equity.parse(stockNo) : financial.parse(stockNo);
}
