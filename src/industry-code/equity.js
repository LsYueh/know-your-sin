
/**
 * 股票
 * @param {string} stockNo STOCK-NO X(6) (股票代號)
 * @return {object|null}
 */
export function parse(stockNo) {
  const part1 = stockNo.slice(0, 4);                      // 前四位
  const part2 = (stockNo.length  >= 5) ? stockNo[4] : ''; // 第五位
  const part3 = (stockNo.length === 6) ? stockNo[5] : ''; // 第六位

  // TODO: ...

  return null;
}