import { Address } from './../../model/address.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appAddress',
})
export class AddressPipe implements PipeTransform {
  transform(value: Address | undefined): string {
    return value
      ? `Street: ${value.street} HouseNumber: ${value.houseNumber} City: ${value.city} Country: ${value.country}`
      : 'No address';
  }
}
