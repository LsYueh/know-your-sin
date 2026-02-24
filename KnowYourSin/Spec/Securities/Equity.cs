namespace KnowYourSin.Spec.Securities;

/// <summary>
/// 權益性證券
/// </summary>
public enum Equity_t
{
    Unknown = 0,

    /// <summary>
    /// 一般股票 (Voting share, Ordinary share, Equity shares)
    /// </summary>
    CommonStock,

    /// <summary>
    /// 特別股票
    /// </summary>
    PreferredStock,

    /// <summary>
    /// 可交換特別股
    /// </summary>
    ExchangeablePreferredStock,

    /// <summary>
    /// 附認股權特別股
    /// </summary>
    PreferredStockWithWarrants,
}
