namespace KnowYourSin.Spec.Securities.NonEquity;

/// <summary>
/// 權證 (TSE/OTC)
/// </summary>
public enum Warrants_t
{
    /// <summary>
    /// 國內標的認購權證
    /// </summary>
    Call_OnDomesticUnderlyingSecurities,

    /// <summary>
    /// 國內標的認售權證
    /// </summary>
    Put_OnDomesticUnderlyingSecurities,

    /// <summary>
    /// 外國標的認購權證
    /// </summary>
    Call_OnForeignUnderlyingSecurities,

    /// <summary>
    /// 外國標的認售權證
    /// </summary>
    Put_OnForeignUnderlyingSecurities,

    /// <summary>
    /// 下限型認購權證
    /// </summary>
    FloorCall,

    /// <summary>
    /// 上限型認售權證
    /// </summary>
    CapPut,

    /// <summary>
    /// 可展延型下限型認購權證
    /// </summary>
    ExtendableFloorCall,

    /// <summary>
    /// 可展延型上限型認售權證
    /// </summary>
    ExtendableCapPut,
}
