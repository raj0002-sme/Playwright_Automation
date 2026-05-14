const ExcelJs = require('exceljs');
const {test, expect} = require('@playwright/test');

async function readWriteExcel(){
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile("C:/Users/raj0002/Downloads/download.xlsx");
    const worksheet= workbook.getWorksheet('Sheet1');
    worksheet.eachRow((row, rowNumber) => {
        const value =[];
        row.eachCell((cell, columnNumber) =>{
            value.push(cell.value)
            //console.log(cell.value);

        });
        console.log(value)

    });
}

test('testing', async ()=>{

await readWriteExcel();

})