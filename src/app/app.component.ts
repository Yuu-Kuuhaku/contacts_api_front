import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExcelService } from './_services/excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lcm-converter';
  form : FormGroup;
  showFiller = false;
  constructor(
    private fb: FormBuilder,
    private excelService: ExcelService
    ){
    this.form = this.fb.group({
      file: [null, [Validators.required]],
      converterType: ['xlsx', [Validators.required]]
    })
  }
  onFileChange(ev: any[]){
    console.log(ev)
    this.form.controls.file.patchValue(ev[0]);
  }

  save(){

    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {

      const file: any = event?.target?.result;
      console.log(file)
      let allLines= file.split(/\r\n|\n/);
      console.log(allLines)

      let count = 0;
      // Reading line by line
      let arrayJson = [];
      while (count < allLines.length) {
        const line = allLines[count];

        if (line.length === 78 && line.trim().match(/^\d/gm)) {

          let contrato = line.substring(0, 15).trim();
          let dataLancamento = line.substring(15, 25);
          let dataRemessa = line.substring(26, 36);
          let lancamentos = line.substring(38, 75).trim()
          let nextLineCount = count + 1;

          let nextLine = allLines[nextLineCount];
          while(nextLine.length !== 78 && !nextLine.trim().match(/^\d/gm)) {
              nextLineCount++;
              nextLine = allLines[nextLineCount];
          }

          let valor = nextLine.substring(40, 54).trim();

          console.log(`${count}, ${contrato}, ${dataLancamento}, ${dataRemessa}, ${lancamentos}, ${valor}`)
          console.log(' ')
          console.log(' ')
          count = (nextLineCount + 1);
          arrayJson.push({
            contrato,
            dataLancamento,
            dataRemessa,
            lancamentos,
            valor
          })
        } else {
            count += 1;
        }
      };
      console.log(arrayJson);
      this.excelService.exportAsExcelFile(arrayJson, this.form.controls.file.value?.name, this.form.controls.converterType.value );
    };

    reader.onerror = (event) => {
        alert(event);
    };

    reader.readAsText(this.form.controls.file.value);
  }

}
