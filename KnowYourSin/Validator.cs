using KnowYourSin.Spec.Industrial;

namespace KnowYourSin;

public static class Validator
{
    /// <summary>
    /// 驗證股票代號 (STOCK-NO X(06))
    /// </summary>
    public static void ValidateStockNo(string stockNo)
    {
        if (string.IsNullOrWhiteSpace(stockNo))
            throw new ArgumentException("StockNo cannot be null or empty.", nameof(stockNo));
        
        if (stockNo.Length < 4 || stockNo.Length > 6)
            throw new ArgumentException("StockNo must be between 4 and 6 characters.", nameof(stockNo));

        if (!IsAllDigits(stockNo))
            throw new ArgumentException("StockNo must contain only numeric digits.", nameof(stockNo));
    }

    /// <summary>
    /// 驗證 string 型產業代碼
    /// </summary>
    public static IndustryCategory ValidateIndustryCode(string indCode)
    {
        if (string.IsNullOrWhiteSpace(indCode))
            throw new ArgumentException("IndCode cannot be null or empty.", nameof(indCode));

        if (indCode.Length != 2)
            throw new ArgumentException("IndCode must be exactly 2 characters.", nameof(indCode));

        if (!IsAllDigits(indCode))
            throw new ArgumentException("IndCode must contain only numeric digits.", nameof(indCode));

        int code = int.Parse(indCode);

        return ValidateIndustryCode(code);
    }

    /// <summary>
    /// 驗證 int 型產業代碼範圍
    /// </summary>
    public static IndustryCategory ValidateIndustryCode(int indCode)
    {
        // 動態檢查 enum 是否定義這個值
        if (!Enum.IsDefined(typeof(IndustryCategory), indCode))
            throw new ArgumentException($"Invalid IndustryCategory code: {indCode:D2}", nameof(indCode));

        return (IndustryCategory)indCode;
    }

    private static bool IsAllDigits(string value)
    {
        foreach (char c in value)
        {
            if (c < '0' || c > '9')
                return false;
        }
        return true;
    }
}
