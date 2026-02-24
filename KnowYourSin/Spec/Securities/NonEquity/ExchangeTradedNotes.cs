namespace KnowYourSin.Spec.Securities.NonEquity;

/// <summary>
/// Exchange Traded Notes (交易所買賣指數債券)
/// </summary>
public enum ETN_t
{
    Unknown = 0,
    
    /// <summary>
    /// Exchange Traded Notes (交易所買賣指數債券)
    /// </summary>
    General,

    /// <summary>
    /// 交易所買賣指數債券
    /// </summary>
    ExchangeTradedNotes = General,

    /// <summary>
    /// 債券ETN
    /// </summary>
    Bond,

    /// <summary>
    /// 槓桿型ETN
    /// </summary>
    Leveraged,

    /// <summary>
    /// 反向型ETN
    /// </summary>
    Inverse,

    /// <summary>
    /// 期權策略型ETN
    /// </summary>
    Strategy,
}
