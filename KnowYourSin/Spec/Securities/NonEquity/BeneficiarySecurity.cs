namespace KnowYourSin.Spec.Securities.NonEquity;

/// <summary>
/// 受益證券
/// </summary>
public enum BeneficiarySecurity_t
{
    Unknown = 0,
    
    /// <summary>
    /// 金融資產證券化受益證券
    /// </summary>
    FinancialAsset,

    /// <summary>
    /// 不動產投資信託受益證券 (REITs)
    /// </summary>
    RealEstateInvestmentTrusts,

    /// <summary>
    /// 不動產投資信託受益證券 (REITs)
    /// </summary>
    REITs = RealEstateInvestmentTrusts,

    /// <summary>
    /// 不動產資產信託受益證券 (REAT)
    /// </summary>
    RealEstateAssetTrust,

    /// <summary>
    /// 不動產資產信託受益證券 (REAT)
    /// </summary>
    REAT = RealEstateAssetTrust,
}
