import {Deserializable} from './deserializable.model';

export class Store implements Deserializable {
  ID: string;
  storeOwnerId: string;
  storeId: string;
  storeContactName: string;
  storeAddress: string;
  storePhoneNumber: number;
  storeEmail: string;
  storeCommissionRate: number;

  constructor(ID?: string, storeOwnerId?: string, storeId?: string, storeContactName?: string, storeAddress?: string, storePhoneNumber?: number, storeEmail?: string, storeCommissionRate?: number) {
    this.ID = ID;
    this.storeOwnerId = storeOwnerId;
    this.storeId = storeId;
    this.storeContactName = storeContactName;
    this.storeAddress = storeAddress;
    this.storePhoneNumber = storePhoneNumber;
    this.storeEmail = storeEmail;
    this.storeCommissionRate = storeCommissionRate;
  }

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
