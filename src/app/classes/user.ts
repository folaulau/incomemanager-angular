import { Address } from './address';

export class User {
    uuid: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    dateOfBirth: Date;
    maritalStatus: string;
    relationToPrimary: string;
    address: Address;
}
