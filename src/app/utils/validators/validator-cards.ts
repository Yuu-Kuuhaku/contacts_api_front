import { FormControl } from "@angular/forms";

/**
 * Faz a verificação do cpf no formulario
 * @param strCard
 */
export function ValidatorCards(control: FormControl) {
  let strCard = control.value;
  let somaDupli: number = 0;
  let somaPosImp: number = 0;
  if (!strCard) {return null}

  if(strCard.length !== 16){
    return {
      card: true,
      message: 'Cartão invalido.'
    };

  }
  if(strCard[0] === 0 ){
    return {
      card: true,
      message: 'Cartão invalido.'
    };
  }
  // tslint:disable-next-line: max-line-length
  /* Duplique cada segundo dígito da direita para a esquerda. Se a duplicação de um dígito resultar em um número de dois dígitos, adicione os dois dígitos para obter um número de dígito único. Some todos os números de um único dígito*/


  for( let i = 0; i < strCard.length; i++ ){
    if( i % 2 === 0 ){

      let numDupl = strCard[i] * 2;
      while(numDupl > 9){
        numDupl = numDupl - 9;
      }
      somaDupli += numDupl;
    } else {

      // Some todos os dígitos nos lugares ímpares .
      somaPosImp += parseInt(strCard[i]);
    }
  }

// tslint:disable-next-line: max-line-length
/* Some os resultados das duas somas anteriores. Se o resultado do Passo 4 é divisível por 10, o número do cartão é válido; caso contrário, é inválido. */
  if( (somaDupli + somaPosImp)% 10 === 0  ){
    return null;
  } else {
    return {
      card: true,
      message: 'Cartão invalido.'
    };
  }


}


