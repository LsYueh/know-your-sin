namespace KnowYourSin.Spec.Industrial;

public static class IndustryCategoryExtensions
{
    public static string ToCode(this IndustryCategory value)
        => ((int)value).ToString("D2");
}

/// <summary>
/// 產業分類代碼 (IND-CODE)
/// </summary>
public enum IndustryCategory
{
    /// <summary>
    /// 
    /// </summary>
    None = 0,

    /// <summary>水泥工業</summary>
    CementIndustry = 1,

    /// <summary>食品工業</summary>
    FoodIndustry = 2,

    /// <summary>塑膠工業</summary>
    PlasticsIndustry = 3,

    /// <summary>紡織纖維</summary>
    TextileFiber = 4,

    /// <summary>電機機械</summary>
    ElectricalMachinery = 5,

    /// <summary>電器電纜</summary>
    ElectricCable = 6,

    /// <summary>玻璃陶瓷</summary>
    GlassCeramics = 8,

    /// <summary>造紙工業</summary>
    PaperIndustry = 9,

    /// <summary>鋼鐵工業</summary>
    SteelIndustry = 10,

    /// <summary>橡膠工業</summary>
    RubberIndustry = 11,

    /// <summary>汽車工業</summary>
    AutomotiveIndustry = 12,

    /// <summary>建材營造</summary>
    Construction = 14,

    /// <summary>航運業</summary>
    Shipping = 15,

    /// <summary>觀光餐旅</summary>
    TourismHospitality = 16,

    /// <summary>金融保險</summary>
    FinanceInsurance = 17,

    /// <summary>貿易百貨</summary>
    TradeDepartmentStore = 18,

    /// <summary>綜合</summary>
    General = 19,

    /// <summary>其他</summary>
    Other = 20,

    /// <summary>化學工業</summary>
    ChemicalIndustry = 21,

    /// <summary>生技醫療業</summary>
    BiotechnologyMedical = 22,

    /// <summary>油電燃氣業</summary>
    OilElectricGas = 23,

    /// <summary>半導體業</summary>
    Semiconductor = 24,

    /// <summary>電腦及週邊設備業</summary>
    ComputerPeripheral = 25,

    /// <summary>光電業</summary>
    Optoelectronics = 26,

    /// <summary>通信網路業</summary>
    Telecommunications = 27,

    /// <summary>電子零組件業</summary>
    ElectronicComponents = 28,

    /// <summary>電子通路業</summary>
    ElectronicDistribution = 29,

    /// <summary>資訊服務業</summary>
    InformationServices = 30,

    /// <summary>其他電子業</summary>
    OtherElectronics = 31,

    /// <summary>綠能環保</summary>
    GreenEnergyEnvironmental = 35,

    /// <summary>數位雲端</summary>
    DigitalCloud = 36,

    /// <summary>運動休閒</summary>
    SportsLeisure = 37,

    /// <summary>居家生活</summary>
    HomeLiving = 38,
}
