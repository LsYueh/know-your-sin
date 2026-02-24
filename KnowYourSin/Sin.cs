using KnowYourSin.Parser.Securities;
using KnowYourSin.Spec.Industrial;
using KnowYourSin.Spec.Securities;

namespace KnowYourSin;

public sealed class StockInfo
{
    public required string StockNo { get; init; }
    public IndustryCategory Industry { get; init; } = IndustryCategory.None;
    public object? Type { get; init; } = null;
}

/// <summary>
/// Securities Identification Number (SIN)
/// </summary>
public static class Sin
{
    /// <summary>
    /// 
    /// </summary>
    /// <param name="stockNo">STOCK-NO X(06) 股票代號</param>
    /// <param name="indCode">IND-CODE X(02) 產業別代碼</param>
    /// <returns></returns>
    public static StockInfo Parse(string stockNo, string indCode)
    {
        var normalizedStockNo = NormalizeStockNo(stockNo);
        var category = ParseIndustry(indCode);

        return Build(normalizedStockNo, category);
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="stockNo">STOCK-NO X(06) 股票代號</param>
    /// <param name="indCode">IND-CODE 產業別代碼</param>
    public static StockInfo Parse(string stockNo, int indCode)
    {
        var normalizedStockNo = NormalizeStockNo(stockNo);
        var category = ParseIndustry(indCode);

        return Build(normalizedStockNo, category);
    }

    /// <summary>
    /// 
    /// </summary>
    /// <param name="stockNo">STOCK-NO X(06) 股票代號</param>
    /// <param name="indCategory">產業分類代碼</param>
    /// <returns>股票識別資訊</returns>
    public static StockInfo Parse(string stockNo, IndustryCategory indCategory)
    {
        var normalizedStockNo = NormalizeStockNo(stockNo);
        var category = indCategory;

        return Build(normalizedStockNo, category);
    }

    private static string NormalizeStockNo(string stockNo)
    {
        Validator.ValidateStockNo(stockNo);
        return stockNo.Trim();
    }

    private static IndustryCategory ParseIndustry<T>(T indCode)
    {
        IndustryCategory category;
        
        if (indCode is int i)
            category = Validator.ValidateIndustryCode(i);
        else if (indCode is string s)
            category = Validator.ValidateIndustryCode(s);
        else
            throw new ArgumentException("Invalid type", nameof(indCode));
        
        return category;
    }

    private static StockInfo Build(string stockNo, IndustryCategory category)
    {
        bool isEquity = category != IndustryCategory.None;
        
        if (isEquity)
        {
            // 普通股、特別股 ...
            Equity_t type = Equity.Parse(stockNo);

            return new StockInfo
            {
                StockNo = stockNo,
                Industry = category,
                Type = type,
            };
        }
        else
        {
            // 其他金融商品 ...
        }

        return new StockInfo
        {
            StockNo = stockNo,
            Industry = category
        };
    }
}
