using KnowYourSin.Spec.Securities;

namespace KnowYourSin.Parser.Securities; 

public sealed record EquityRule(
    int Length,
    Func<string, bool> Condition,
    Equity_t Result
);

public static class Equity
{
    public static Equity_t Parse(string stockNo)
    {
        if (string.IsNullOrEmpty(stockNo))
            return Equity_t.Unknown;
        
        var len = stockNo.Length;

        // 僅接受 4~6 碼
        if (len < 4 || len > 6)
            return Equity_t.Unknown;
        
        // 前四碼必須 1000~9999
        if (!(stockNo[0] >= '1' && stockNo[0] <= '9' &&
            char.IsDigit(stockNo[1]) &&
            char.IsDigit(stockNo[2]) &&
            char.IsDigit(stockNo[3]))
        ) return Equity_t.Unknown;

        if (!Rules.TryGetValue(len, out var rules))
            return Equity_t.Unknown;

        foreach (var rule in rules)
            if (rule.Condition(stockNo)) return rule.Result;

        return Equity_t.Unknown;
    }
    
    private static bool IsCharAtoY(char ch)
        => ch >= 'A' && ch <= 'Y';

    private static bool IsDigit1to9(char ch)
        => ch >= '1' && ch <= '9';

    private static bool IsCharAtoC(char ch)
        => ch >= 'A' && ch <= 'C';

    private static readonly Dictionary<int, EquityRule[]> Rules = new()
    {
        [4] = [
            new EquityRule(4, s => true, Equity_t.CommonStock),
        ],

        [5] = [
            new EquityRule(5, s => IsCharAtoY(s[4]), Equity_t.PreferredStock),
        ],

        [6] = [
            new EquityRule(6, s => s[4] == 'Z' && IsDigit1to9(s[5]),
                Equity_t.ExchangeablePreferredStock),

            new EquityRule(6, s => s[4] == 'G' && IsCharAtoC(s[5]),
                Equity_t.PreferredStockWithWarrants),
        ]
    };
}
