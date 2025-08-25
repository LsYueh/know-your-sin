'use strict'


/**------+---------+---------+---------+---------+---------+---------+----------
 * Helpers
---------+---------+---------+---------+---------+---------+---------+--------*/

/**
 * Parse the security type from the given SIN.
 * @param {string} sin The SIN to parse.
 * @return {object|null} The security type code, or undefined if not recognized.
 */ 
function parse(sin) {
    if (typeof sin !== 'string' || sin.length > 6) {
        return null;
    }
    
    return null;

    // The implementation is commented out for now.
    // if (typeof sin !== 'string' || sin.length < 2) {
    //     return null;
    // }
    // const code = sin.slice(0, 2);
    // switch (code) {
    //     case '01': return Security.GeneralStocks;
    //     case '02': return Security.GeneralSpecialShares;
    //     case '03': return Security.ExchangeableSpecialShares;
    //     case '04': return Security.SpecialSharesWithStockOptions;
    //     case '07': return Certificate.BenefitCertificates_ClosedEndFunds;
    //     case '10': return ETFs.ExchangeTradedFund;
    //     case '11': return ETFs.ExchangeTradedFund_F;
    //     case '12': return ETFs.ETF_Bond;
    //     case '13': return ETFs.ETF_Bond_F;
    //     case '14': return ETFs.ETF_Balanced;
    //     case '15': return ETFs.ETF_Leveraged;
    //     case '16': return ETFs.ETF_Leveraged_F;
    //     case '17': return ETFs.ETF_Inverse;
    //     case '18': return ETFs.ETF_Inverse_F;
    //     case '19': return ETFs.ETF_Futures;
    //     case '20': return ETFs.ETF_Futures_F;
    //     case '21': return ETFs.ETF_Active;
    //     case '22': return ETFs.ETF_ActiveBond;
    //     default: return null;
    // }
}

/**------+---------+---------+---------+---------+---------+---------+----------
 * Exports
---------+---------+---------+---------+---------+---------+---------+--------*/
module.exports = { parse };
