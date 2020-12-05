import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from './transaction';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(transaction: Transaction[], search2: string): Transaction[] {
    if (search2) {
      return transaction.filter(transaction => {
        return transaction.beneficiaryfirstName.toLowerCase().includes(search2.toLowerCase());
      });
    } else {
      return transaction;
    }
  }
  }


