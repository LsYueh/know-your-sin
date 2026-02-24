using KnowYourSin.Spec.Industrial;
using KnowYourSin.Spec.Securities;

namespace KnowYourSin.Test;

[TestClass]
public class SinTest
{
    [DataTestMethod]
    [DataRow("1234", 1)]
    [DataRow("12345", 38)]
    [DataRow("123456", 00)]
    [DataRow("1234A", 00)]
    [DataRow("1234AB", 00)]
    public void Parse_ValidIntInputs(string stockNo, int indCode)
    {
        var info = Sin.Parse(stockNo, indCode);

        Assert.AreEqual(stockNo, info.StockNo);
        Assert.IsTrue(Enum.IsDefined(typeof(IndustryCategory), info.Industry));
    }

    [DataTestMethod]
    [DataRow("1234", "01")]
    [DataRow("12345", "38")]
    [DataRow("123456", "00")]
    [DataRow("1234A", "00")]
    [DataRow("1234AB", "00")]
    public void Parse_ValidStringInputs(string stockNo, string indCode)
    {
        var info = Sin.Parse(stockNo, indCode);

        Assert.AreEqual(stockNo, info.StockNo);
        Assert.IsTrue(Enum.IsDefined(typeof(IndustryCategory), info.Industry));
    }

    [DataTestMethod]
    [DataRow("1101" , "01", Equity_t.CommonStock)] // 台泥
    // [DataRow("1101B", "", Equity_t.PreferredStock)] // 台泥乙特 (找不到 產業別)
    [DataRow("1312A", "03", Equity_t.PreferredStock)] // 國喬特
    public void Parse_Equity(string stockNo, string indCode, Equity_t expected)
    {
        var info = Sin.Parse(stockNo, indCode);

        Assert.AreEqual(expected, info.Type);
    }

    // Exceptions

    [DataTestMethod]
    [DataRow("123", 1)]
    [DataRow("1234567", 1)]
    [DataRow("1234", 39)]
    [DataRow("12A4", 1)]
    [DataRow("1234", -1)]
    [ExpectedException(typeof(ArgumentException))]
    public void Parse_InvalidIntInputs_Throws(string stockNo, int indCode)
    {
        var info = Sin.Parse(stockNo, indCode);
    }

    [DataTestMethod]
    [DataRow("1234", "1")]
    [DataRow("12A4", "01")]
    [DataRow("12A456", "01")]
    [ExpectedException(typeof(ArgumentException))]
    public void Parse_InvalidStringInputs_Throws(string stockNo, string indCode)
    {
        var info = Sin.Parse(stockNo, indCode);
    }
}
