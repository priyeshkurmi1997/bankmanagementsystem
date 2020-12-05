import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './customer';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(customers: Customer[], search: string): Customer[] {
    if (search) {
      return customers.filter(customers => {
        return customers.firstname.toLowerCase().includes(search.toLowerCase())||customers.lastname.toLowerCase().includes(search.toLowerCase());
      });
    } else {
      return customers;
    }
  }

}
