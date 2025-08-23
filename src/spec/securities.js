'use strict'

let cnt = 0;


/**------+---------+---------+---------+---------+---------+---------+----------
 * 證券種類及產業類別代碼對照
---------+---------+---------+---------+---------+---------+---------+--------*/

cnt = 1;
/** @enum {number}  */
const SinCatg = {
    /** 一般股票 */
    GeneralStocks: cnt++,
    /** 一般特別股 */
    GeneralSpecialShares: cnt++,
    /** 可交換特別股 */
    ExchangeableSpecialShares: cnt++,
    /** 附認股權特別股 */
    SpecialSharesWithStockOptions: cnt++,

    // 憑證

    /** 受益憑證 */
    BenefitCertificates: cnt, // 受益憑證 (封閉式基金) 共用
    /** 封閉式基金 */
    ClosedEndFunds: cnt++, // 受益憑證 (封閉式基金) 共用

    // ETF

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

    // 債券

    /** 金融資產證券化受益證券 */
    FinancialAssetBeneficiarySecurities: cnt++,
    /** 不動產投資信託受益證券 (REITs) */
    RealEstateInvestmentTrusts: cnt++,
    /** 不動產資產信託受益證券 (REAT) */
    RealEstateAssetTrust: cnt++,

    // ETN

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
};

Object.freeze(SinCatg);


/**------+---------+---------+---------+---------+---------+---------+----------
 * Exports
---------+---------+---------+---------+---------+---------+---------+--------*/
module.exports = { SinCatg };
