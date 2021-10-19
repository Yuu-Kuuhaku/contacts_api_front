import { CardCreditPipe } from './../pipe-card-credit/card-credit.pipe';
import { TruncatePipe } from './../pipe-truncate/truncate.pipe';
import { CpfPipe } from './../pipe-cpf/cpf.pipe';
import { TelefonePipe } from './../pipe-telefone/telefone.pipe';
import { CnpjPipe } from '../pipe-cnpj/cnpj.pipe';
import {
    Pipe,
    PipeTransform
} from '@angular/core';

// Library used to humanize a date in this example
import { DatePipe, CurrencyPipe, DecimalPipe, UpperCasePipe } from '@angular/common';


@Pipe({name: 'dynamic'})
export class DynamicPipe implements PipeTransform {



    transform(value:string, modifier:string) {
        if (!modifier) { return value; }
        // Evaluate pipe string
        if(value !== null && value !== undefined ){
          return eval('this.' + modifier + '(\'' + value + '\')');
        }
        return value;

    }

    // Returns 'enabled' or 'disabled' based on input value
    statusFromBoolean(value:string):string {
        switch (value) {
            case 'true':
            case '1':
                return 'Sim';
            default:
                return 'Não';
        }
    }

    // // Returns a human friendly time format e.g: '14 minutes ago', 'yesterday'
    // humanizeDate(value:string):string {
    //     // Humanize if date difference is within a week from now else returns 'December 20, 2016' format
    //     if (moment().diff(moment(value), 'days') < 8) return moment(value).fromNow();
    //     return moment(value).format('MMMM Do YYYY');
    // }
    fullDateTimeIso(value:string, modifier:string) {
      return new DatePipe('pt-br').transform(value, 'yyyy-MM-ddTHH:mm' );

    }
    fullDateTime(value:string, modifier:string) {
        return new DatePipe('pt-br').transform(value, 'dd/MM/yyyy  HH:mm' );
    }
    fullDate(value:string, modifier:string) {
      return new DatePipe('pt-br').transform(value, 'dd/MM/yyyy' );
  }
    day(value:string, modifier:string) {
      return new DatePipe('pt-br').transform(value, 'dd' );
    }

    month(value:string, modifier:string) {
      return new DatePipe('pt-br').transform(value, 'MMM' );
    }

    time(value:string, modifier:string) {
      return new DatePipe('pt-br').transform(value, 'HH:mm' );
  }

    cnpj(value: string) {
        return new CnpjPipe().transform(value);
    }

    currency(value: string){
      return new CurrencyPipe('pt-br').transform(value, 'BRL');

    }

    decimal(value: string){
      return new DecimalPipe('pt-br').transform(value, '1.0-2');
    }

    phone(value: string){
      return new TelefonePipe().transform(value );
    }

    cpf(value: string) {
      return new CpfPipe().transform(value);
    }

    truncate(value: string, args: string[]){

      return new TruncatePipe().transform( value, args );
    }
    card_credit(value: string){
      const  args: string[] = ['************', '4']
      return new CardCreditPipe().transform( value, args );
    }

    numPedido(value: string){
      return new DecimalPipe('pt-br').transform(value, );
    }

    // truncateTable(value: string){
    //   return new TruncatePipe().transform( value, ['50'] );
    // }

    uppercase(value: string, args: string[]){
      return new UpperCasePipe().transform( value);
    }




}

export const DYNAMIC_PIPES = [DynamicPipe];
