var ctx = new Excel.RequestContext();
var activeWorksheet = ctx.workbook.worksheets.getActiveWorksheet();
ctx.load(activeWorksheet);
ctx.executeAsync().then(function () {
	console.log(activeWorksheet.name);
	console.log("done");
});