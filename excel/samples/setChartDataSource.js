var ctx = new Excel.ExcelClientContext();
var chart = ctx.workbook.worksheets.getItem("Sheet1").charts.getItem("Chart1");	
var sourceData = "A1:B4";

chart.SetData(sourceData, "Columns");
ctx.executeAsync().then();