namespace KnowYourSin.Spec.Securities.NonEquity;

/// <summary>
/// Taiwan Depositary Receipt (臺灣存託憑證)
/// </summary>
public enum TDR_t
{
    Unknown = 0,
    
    /// <summary>
    /// Taiwan Depositary Receipt (臺灣存託憑證)
    /// </summary>
    General,

    /// <summary>
    /// 臺灣存託憑證
    /// </summary>
    TaiwanDepositaryReceipt = General,

    /// <summary>
    /// 存託憑證可轉換公司債
    /// </summary>
    DepositaryConvertibleBonds,

    /// <summary>
    /// 存託憑證附認股權公司債
    /// </summary>
    DepositaryBondswithWarrants,

    /// <summary>
    /// 存託憑證附認股權公司債履約後之公司債
    /// </summary>
    DepositaryBondsRemainingAfterExerciseOfWarrants,

    /// <summary>
    /// 存託憑證認股權憑證
    /// </summary>
    DepositaryWarrants,

    /// <summary>
    /// 存託憑證認股權憑證
    /// </summary>
    DepositaryEquityWarrants = DepositaryWarrants,
}
