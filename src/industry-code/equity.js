import { Equity } from '../spec/security.js';
import Security from '../type/security.js';

/**------+---------+---------+---------+---------+---------+---------+----------
 * Helpers
---------+---------+---------+---------+---------+---------+---------+--------*/

/**
 * @param {string} str 
 * @returns 
 */
function isInRange1000to9999(str) {
  return /^[1-9]\d{3}$/.test(str);
}

/**
 * @param {string} ch 
 * @returns 
 */
function isCharAtoY(ch) {
  return /^[A-Y]$/.test(ch);
}

/**
 * @param {string} ch 
 * @returns 
 */
function isDigit1to9(ch) {
  return /^[1-9]$/.test(ch);
}

/**
 * @param {string} ch 
 * @returns 
 */
function isCharAtoC(ch) {
  return /^[A-C]$/.test(ch);
}

/**------+---------+---------+---------+---------+---------+---------+----------
 * Exports
---------+---------+---------+---------+---------+---------+---------+--------*/

/**
 * 股票
 * @param {string} stockNo STOCK-NO X(6) (股票代號)
 * @return {Security|null}
 */
export function parse(stockNo) {
  const part1 = stockNo.slice(0, 4);                      // 前四位
  const part2 = (stockNo.length  >= 5) ? stockNo[4] : ''; // 第五碼
  const part3 = (stockNo.length === 6) ? stockNo[5] : ''; // 第六碼

  if (!isInRange1000to9999(part1)) return null;

  /*--*/ if (stockNo.length === 4) {
    // 1000-9999
    return new Security(Equity.GeneralStocks);
  } else if (stockNo.length === 5 && isCharAtoY(part2)) {
    // 股票 + 第五碼 A ~ Y
    return new Security(Equity.GeneralSpecialShares);
  } else if (stockNo.length === 6 && part2 === 'Z' && isDigit1to9(part3)) {
    // 股票 + 第五碼 Z + 第六碼 1 ~ 9
    return new Security(Equity.ExchangeableSpecialShares);
  } else if (stockNo.length === 6 && part2 === 'G' && isCharAtoC(part3)) {
    // 股票 + 第五碼 G + 第六碼 A ~ C
    return new Security(Equity.SpecialSharesWithStockOptions);
  } else {
    return null;
  }
}