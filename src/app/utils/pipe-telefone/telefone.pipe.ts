import {Pipe, PipeTransform} from "@angular/core";
@Pipe({name: 'telefoneMask'})
export class TelefonePipe implements PipeTransform{

    transform(value:string){
       if(value){
            value = value.toString();
            if(value.substring(0,4).includes("0800")){
                return value.substring(0,4).concat(" ")
                                    .concat(value.substring(4,7))
                                    .concat(" ")
                                    .concat(value.substring(7,11))
            }
            if(value.length === 10){
                return "("+value.substring(0,2).concat(") ")
                                     .concat(value.substring(2,6))
                                     .concat("-")
                                     .concat(value.substring(6,10))
            }
            if(value.length === 11){
                return "("+value.substring(0,2).concat(") ")
                                     .concat(value.substring(2,7))
                                     .concat("-")
                                     .concat(value.substring(7,11))
            }
        }
        return value;
    }
}
