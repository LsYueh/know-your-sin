namespace KnowYourSin.Spec.Securities;

/// <summary>
/// 股票
/// </summary>
public enum Security_t
{
    /// <summary>
    /// 一般股票 (Voting share, Ordinary share, Equity shares)
    /// </summary>
    CommonStocks,

    /// <summary>
    /// 特別股票 (Preferred shares)
    /// </summary>
    Preferreds,

    /// <summary>
    /// 可交換特別股
    /// </summary>
    ExchangeablePreferreds,

    /// <summary>
    /// 附認股權特別股
    /// </summary>
    PreferredWithWarrants,
}
