namespace KnowYourSin.Spec.Securities;

/// <summary>
/// Exchange Traded Fund (指數股票型基金)
/// </summary>
public enum ETF_t
{
    /// <summary>
    /// Exchange Traded Fund (指數股票型基金)
    /// </summary>
    General,

    /// <summary>
    /// 指數股票型基金
    /// </summary>
    ExchangeTradedFund = General,

    /// <summary>
    /// 開放式基金
    /// </summary>
    OpenEndFunds = General,

    /// <summary>
    /// ETF(外幣交易)
    /// </summary>
    ForeignExchange,

    /// <summary>
    /// ETF(外幣交易)
    /// </summary>
    Fx = ForeignExchange,

    /// <summary>
    /// 債券ETF
    /// </summary>
    Bond,

    /// <summary>
    /// 債券ETF(外幣交易)
    /// </summary>
    BondFx,

    /// <summary>
    /// 平衡型ETF
    /// </summary>
    Balanced,

    /// <summary>
    /// 槓桿型ETF
    /// </summary>
    Leveraged,

    /// <summary>
    /// 槓桿型ETF(外幣交易)
    /// </summary>
    LeveragedFx,

    /// <summary>
    /// 反向型ETF
    /// </summary>
    Inverse,

    /// <summary>
    /// 反向型ETF(外幣交易)
    /// </summary>
    InverseFx,

    /// <summary>
    /// 期信託ETF
    /// </summary>
    Futures,

    /// <summary>
    /// 期信託ETF(外幣交易)
    /// </summary>
    FuturesFx,

    /// <summary>
    /// 主動式ETF
    /// </summary>
    Active,

    /// <summary>
    /// 債券主動式ETF
    /// </summary>
    ActiveBond,
}
