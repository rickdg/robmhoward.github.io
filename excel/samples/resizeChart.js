var ctx = new Excel.ExcelClientContext();
var chart = ctx.workbook.worksheets.getItem("Sheet1").charts.getItemAt(0);	
chart.height = 200;
chart.width = 200;
ctx.executeAsync().then();