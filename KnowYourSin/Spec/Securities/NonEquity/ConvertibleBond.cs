namespace KnowYourSin.Spec.Securities.NonEquity;

/// <summary>
/// Convertible Bond (可轉換債券)
/// </summary>
public enum CB_t
{
    Unknown = 0,
    
    /// <summary>
    /// Convertible Bond (可轉換債券)
    /// </summary>
    General,

    /// <summary>
    /// 可轉換債券
    /// </summary>
    ConvertibleBond = General,

    /// <summary>
    /// 交換公司債及交換金融債
    /// </summary>
    ExchangeableCorporateBondsAndExchangeableFinancialBonds,

    /// <summary>
    /// 認股權憑證
    /// </summary>
    EquityWarrants,

    /// <summary>
    /// 附認股權公司債
    /// </summary>
    BondsWithWarrants,

    /// <summary>
    /// 附認股權公司債履約後之公司債
    /// </summary>
    BondsRemainingAfterExerciseOfWarrants,
}
