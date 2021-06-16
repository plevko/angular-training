import { Address } from './address.model';

export interface Employee {
  id: number;
  name: string;
  surname: string;
  phone: string;
  email: string;
  address?: Address;
}
