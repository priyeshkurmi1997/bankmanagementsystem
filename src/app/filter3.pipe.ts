import { Pipe, PipeTransform } from '@angular/core';
import { Beneficiary1 } from './benefeciary1';
import { Beneficiary } from './beneficiary';

@Pipe({
  name: 'filter3'
})
export class Filter3Pipe implements PipeTransform {

  transform(benef: Beneficiary1[], search3: string): Beneficiary1[] {
    if (search3) {
      return benef.filter(benef => {
        return benef.beneficiaryfirstName.toLowerCase().includes(search3.toLowerCase());
      });
    } else {
      return benef;
    }
  }
  }


