import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExcelService } from '../_services/excel.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  form: FormGroup;
  showFiller = false;
  constructor(
    private fb: FormBuilder,
    private excelService: ExcelService
  ) {
    this.form = this.fb.group({
      file: [null, [Validators.required]],
      company: [null, [Validators.required]],
      work: [null, [Validators.required]],
      bank: [null, [Validators.required]],
      account: [null, [Validators.required]],
      converterType: ['xlsx', [Validators.required]]
    })
  }

  ngOnInit() { }

  onFileChange(ev: any[]) {

    this.form.controls.file.patchValue(ev[0]);
  }
  onFileRemove(ev: any[]) {
    if (ev === this.form.controls.file.value) {
      this.form.controls.file.setValue(null);
      this.form.updateValueAndValidity();
    }
  }

  save() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {

      const file: any = event?.target?.result;

      let allLines = file.split(/\r\n|\n/);


      let count = 0;
      // Reading line by line
      let arrayJson = [];
      while (count < allLines.length) {
        const line = allLines[count];

        if (line.length === 78 && line.trim().match(/^\d/gm)) {

          let contract = line.substring(0, 15).trim();
          let releaseDate = line.substring(15, 25);
          let shippingDate = line.substring(26, 36);
          let releases = line.substring(38, 75).trim()
          let nextLineCount = count + 1;

          let nextLine = allLines[nextLineCount];
          while (nextLine.length !== 78 || !nextLine.trim().match(/^\d/gm)) {
            nextLineCount++;
            nextLine = allLines[nextLineCount];
          }
          let value = Number(nextLine.substring(40, 54).trim().replace('.', '').replace(',', '.'));

          count = (nextLineCount + 1);

          const sheetName = releases.replace(/[^a-zA-Z ]/g, "").substring(0, 31);

          const index = arrayJson.findIndex(item => item.name === sheetName);
          if (index === -1) {
            arrayJson.push({
              name: sheetName,
              values: [{
                'EMPRESA': this.form.controls.company.value,
                'OBRA': this.form.controls.work.value,
                'NUMERO_CONTRATO': contract,
                'VALOR': value,
                'DATA_RECEBIMENTO': releaseDate,
                'DATA_DEPOSITO': shippingDate,
                'DATA_CALCULO': shippingDate,
                'BANCO': this.form.controls.bank.value,
                'CONTA': this.form.controls.account.value,
                'LANCAMENTO': releases,
              }]
            })
          } else {
            arrayJson[index].values?.push({
              'EMPRESA': this.form.controls.company.value,
              'OBRA': this.form.controls.work.value,
              'NUMERO_CONTRATO': contract,
              'VALOR': value,
              'DATA_RECEBIMENTO': releaseDate,
              'DATA_DEPOSITO': shippingDate,
              'DATA_CALCULO': shippingDate,
              'BANCO': this.form.controls.bank.value,
              'CONTA': this.form.controls.account.value,
              'LANCAMENTO': releases,
            })
          }
          // arrayJson.push({
            
          // })

        } else {
          count += 1;
        }
      };
      try {
        console.log(arrayJson)
        this.excelService.exportAsExcelFile(arrayJson, this.form.controls.file.value?.name, this.form.controls.converterType.value);

      }
      catch (error) {
        alert(error);
      }
    };

    reader.onerror = (event) => {
      alert(event);
    };

    reader.readAsText(this.form.controls.file.value);
  }
}
