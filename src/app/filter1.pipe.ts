import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from './transaction';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

  transform(transaction: Transaction[], search1: string): Transaction[]{
    if (search1) {
      return transaction.filter(transaction => {
        return transaction.beneficiaryfirstName.toLowerCase().includes(search1.toLowerCase());
      });
    } else {
      return transaction;
    }
  }

}
