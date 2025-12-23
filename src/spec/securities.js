let cnt = 0;


/**------+---------+---------+---------+---------+---------+---------+----------
 * 證券種類及產業類別代碼對照
---------+---------+---------+---------+---------+---------+---------+--------*/

cnt = 1;

/** @enum {number}  */
export const Security = Object.freeze({
  /** 一般股票 */
  GeneralStocks: cnt++,
  /** 一般特別股 */
  GeneralSpecialShares: cnt++,
  /** 可交換特別股 */
  ExchangeableSpecialShares: cnt++,
  /** 附認股權特別股 */
  SpecialSharesWithStockOptions: cnt++,
});

/** @enum {number}  */
export const Certificate = Object.freeze({
  /** 受益憑證(封閉式基金) */
  BenefitCertificates_ClosedEndFunds: cnt++,
});

/** @enum {number} ETF */
export const ETFs = Object.freeze({
  /** ETF */
  ExchangeTradedFund: cnt++,
  /** ETF(外幣交易) */
  ExchangeTradedFund_F: cnt++,
  /** 債券ETF */
  ETF_Bond: cnt++,
  /** 債券ETF(外幣交易) */
  ETF_Bond_F: cnt++,
  /** 平衡型ETF */
  ETF_Balanced: cnt++,
  /** 槓桿型ETF */
  ETF_Leveraged: cnt++,
  /** 槓桿型ETF(外幣交易) */
  ETF_Leveraged_F: cnt++,
  /** 反向型ETF */
  ETF_Inverse: cnt++,
  /** 反向型ETF(外幣交易) */
  ETF_Inverse_F: cnt++,
  /** 期信託ETF */
  ETF_Futures: cnt++,
  /** 期信託ETF(外幣交易) */
  ETF_Futures_F: cnt++,
  /** 主動式ETF */
  ETF_Active: cnt++,
  /** 債券主動式ETF */
  ETF_ActiveBond: cnt++,
});

/** @enum {number} 受益證券 */
export const BeneficiarySecurity = Object.freeze({
  /** 金融資產證券化受益證券 */
  FinancialAssetBeneficiarySecurities: cnt++,
  /** 不動產投資信託受益證券 (REITs) */
  RealEstateInvestmentTrusts: cnt++,
  /** 不動產資產信託受益證券 (REAT) */
  RealEstateAssetTrust: cnt++,
});

/** @enum {number} ETN */
export const ETNs = Object.freeze({
  /** ETN */
  ExchangeTradedNote: cnt++,
  /** 債券ETN */
  ETN_Bond: cnt++,
  /** 槓桿型ETN */
  ETN_Leveraged: cnt++,
  /** 反向型ETN */
  ETN_Inverse: cnt++,
  /** 期權策略型ETN */
  ETN_Strategy: cnt++,
});

/** @enum {number} 權證 (TSE/OTC) */
export const Warrants = Object.freeze({
  /** 國內標的認購權證 */
  CallWarrantsOnDomesticUnderlyingSecurities: cnt++,
  /** 國內標的認售權證 */
  PutWarrantsOnDomesticUnderlyingSecurities: cnt++,
  /** 外國標的認購權證 */
  CallWarrantsOnForeignUnderlyingSecurities: cnt++,
  /** 外國標的認售權證 */
  PutWarrantsOnForeignUnderlyingSecurities: cnt++,
  /** 下限型認購權證 */
  FloorCallWarrant: cnt++,
  /** 上限型認售權證 */
  CapPutWarrant: cnt++,
  /** 可展延型下限型認購權證 */
  ExtendableFloorCallWarrants: cnt++,
  /** 可展延型上限型認售權證 */
  ExtendableCapPutWarrant: cnt++,
});

/** @enum {number} 臺灣存託憑證 */
export const TaiwanDepositaryReceipt = Object.freeze({
  /** 臺灣存託憑證 */
  TaiwanDepositaryReceipt: cnt++,
  /** 存託憑證可轉換公司債 */
  DepositaryConvertibleBonds: cnt++,
  /** 存託憑證附認股權公司債 */
  DepositaryBondswithWarrants: cnt++,
  /** 存託憑證附認股權公司債履約後之公司債 */
  DepositaryBondsRemainingAfterExerciseOfWarrants: cnt++,
  /** 存託憑證認股權憑證 */
  DepositaryWarrants_DepositaryEquityWarrants: cnt++,
});

/** @enum {number} 公司債 */
export const CBs = Object.freeze({
  /** 轉換公司債 */
  ConvertibleBonds: cnt++,
  /** 交換公司債及交換金融債 */
  ExchangeableCorporateBondsAndExchangeableFinancialBonds: cnt++,
  /** 認股權憑證 */
  EquityWarrants: cnt++,
  /** 附認股權公司債 */
  BondsWithWarrants: cnt++,
  /** 附認股權公司債履約後之公司債 */
  BondsRemainingAfterExerciseOfWarrants: cnt++,
});
