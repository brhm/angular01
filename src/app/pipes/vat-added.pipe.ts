import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  // value pipe ta değiştirmeyi düşündüğümüz değer. type bu değer ile aynı yapıyoruz.
  // burada value değeri unitPrice ile aynı olmalı.
  // gönderdiğimiz parametre rate:nummber , dönüş tipi de yine number. oluyor. 
  transform(value: number, rate:number): number {
    return value+(value*rate/100);
  }

}
