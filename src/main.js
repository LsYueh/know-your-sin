import * as equity from './industry-code/equity.js';
import * as financial from './industry-code/financial.js';

/**------+---------+---------+---------+---------+---------+---------+----------
 * Exports
---------+---------+---------+---------+---------+---------+---------+--------*/

/**
 * Parse the security type from the given SIN.
 * @param {object} input 
 * @param {string} input.stockNo STOCK-NO X(6) (股票代號)
 * @param {string} input.indCode IND-CODE X(2) (產業別代碼)
 * @return {object|null} The security type code, or undefined if not recognized.
 */
export function parse(input) {
  const { stockNo, indCode } = input || {};

  if (stockNo === undefined || indCode === undefined) {
    throw new Error('必須提供 stockNo 和 indCode');
  }

  if (typeof stockNo !== 'string' || stockNo.length < 4 || stockNo.length > 6) {
    throw new Error('股票代號必須是 4 到 6 位字串');
  }

  if (typeof indCode !== 'string' || indCode.length !== 2) {
    throw new Error('產業別代碼必須是 2 位字串');
  }

  return (indCode !== '00') ? equity.parse(stockNo) : financial.parse(stockNo);
}
