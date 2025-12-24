let cnt = 0;


/**------+---------+---------+---------+---------+---------+---------+----------
 * 證券種類及產業類別代碼對照
---------+---------+---------+---------+---------+---------+---------+--------*/

cnt = 1;

/**
 * @readonly
 * @enum {number} 股票
 */
export const Equity = Object.freeze({
  /** 一般股票 */
  GeneralStocks: cnt++,
  /** 一般特別股 */
  GeneralSpecialShares: cnt++,
  /** 可交換特別股 */
  ExchangeableSpecialShares: cnt++,
  /** 附認股權特別股 */
  SpecialSharesWithStockOptions: cnt++,
});

/**
 * @typedef {number} Equity_t 股票
 */

/**
 * @enum {number} Beneficiary Certificate (受益憑證)
 * @description 受益憑證是一種有價證券，代表投資人對證券投資信託基金所享有的受益權，有點像基金的「所有權證明」，證明你是該基金的受益人。購買基金時，基金公司會發行受益憑證給投資人；在贖回或轉換前需交回，若遺失補發較麻煩。現在多數基金公司以「買賣通知單」或帳簿劃撥代替實體憑證，而ETF（指數股票型基金）也是受益憑證的一種形式，可在證券交易所交易。
 */
export const BeneficiaryCertificate = Object.freeze({
  /** 封閉式基金 */
  ClosedEndFunds: cnt++,
});

/**
 * @typedef {number} BeneficiaryCertificate_t Beneficiary Certificate (受益憑證)
 */

/** @enum {number} Exchange Traded Fund (指數股票型基金) */
export const ETF = Object.freeze({
  /** ETF */
  ExchangeTradedFund: cnt++,
  /** ETF(外幣交易) */
  ExchangeTradedFund_F: cnt++,
  /** 債券ETF */
  Bond: cnt++,
  /** 債券ETF(外幣交易) */
  Bond_F: cnt++,
  /** 平衡型ETF */
  Balanced: cnt++,
  /** 槓桿型ETF */
  Leveraged: cnt++,
  /** 槓桿型ETF(外幣交易) */
  Leveraged_F: cnt++,
  /** 反向型ETF */
  Inverse: cnt++,
  /** 反向型ETF(外幣交易) */
  Inverse_F: cnt++,
  /** 期信託ETF */
  Futures: cnt++,
  /** 期信託ETF(外幣交易) */
  Futures_F: cnt++,
  /** 主動式ETF */
  Active: cnt++,
  /** 債券主動式ETF */
  ActiveBond: cnt++,
});

/**
 * @typedef {number} ETF_t Exchange Traded Fund (指數股票型基金)
 */

/** @enum {number} Beneficiary Security (受益證券) */
export const BeneficiarySecurity = Object.freeze({
  /** 金融資產證券化受益證券 */
  FinancialAssetBeneficiarySecurities: cnt++,
  /** 不動產投資信託受益證券 (REITs) */
  RealEstateInvestmentTrusts: cnt++,
  /** 不動產資產信託受益證券 (REAT) */
  RealEstateAssetTrust: cnt++,
});

/**
 * @typedef {number} BeneficiarySecurity_t Beneficiary Security (受益證券)
 */

/** @enum {number} Exchange Traded Note (指數投資證) */
export const ETN = Object.freeze({
  /** ETN */
  ExchangeTradedNote: cnt++,
  /** 債券ETN */
  Bond: cnt++,
  /** 槓桿型ETN */
  Leveraged: cnt++,
  /** 反向型ETN */
  Inverse: cnt++,
  /** 期權策略型ETN */
  Strategy: cnt++,
});

/**
 * @typedef {number} ETN_t Exchange Traded Note (指數投資證)
 */

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

/**
 * @typedef {number} Warrants_t 權證
 */

/** @enum {number} Taiwan Depositary Receipt (臺灣存託憑證) */
export const TDR = Object.freeze({
  /** TDR */
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

/**
 * @typedef {number} TDR_t Taiwan Depositary Receipt (臺灣存託憑證)
 */

/** @enum {number} Convertible Bonds (公司債) */
export const CB = Object.freeze({
  /** CB */
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

/**
 * @typedef {number} CB_t Convertible Bonds (公司債)
 */

/**
 * @typedef { Equity_t | BeneficiaryCertificate_t | ETF_t | ETN_t | Warrants_t | TDR_t | CB_t } Security_t
 */