import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { BookType } from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string, bookType: BookType): void {
    
    let Sheets: any = {};
    let SheetNames: string[] = [];
    json.forEach((element) => {
      Sheets[element.name] = XLSX.utils.json_to_sheet(element.values);
      SheetNames.push(element.name)
    })
    // let worksheets: XLSX.WorkSheet[] = json.map(element => XLSX.utils.json_to_sheet(json));
    // console.log('worksheet',worksheet);
    const workbook: XLSX.WorkBook = { Sheets, SheetNames };
    const excelBuffer: any = XLSX.write(workbook, { bookType , type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName, bookType);
  }

  private saveAsExcelFile(buffer: any, fileName: string, bookType: BookType): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + '.' + bookType );
  }

}