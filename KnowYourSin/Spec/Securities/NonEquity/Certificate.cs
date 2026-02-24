namespace KnowYourSin.Spec.Securities.NonEquity;

/// <summary>
/// 受益憑證
/// </summary>
public enum Certificate_t
{
    Unknown = 0,
    
    /// <summary>
    /// 受益憑證
    /// </summary>
    Benefit,

    /// <summary>
    /// 封閉式基金
    /// </summary>
    ClosedEndFunds = Benefit,
}
