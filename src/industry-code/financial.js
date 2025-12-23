
/**
 * 金融商品
 * @param {string} stockNo STOCK-NO X(6) (股票代號)
 * @return {object|null}
 */
export function parse(stockNo) {
  const part1 = stockNo.slice(0, 2); // 前二位
  const part2 = stockNo.slice(2);    // 要根據前二位做判斷

  // TODO: ...

  return null;
}