import {Deserializable} from '../../shared/models/deserializable.model';

export class Store  {
  ID: number;
  storeOwnerId: string;
  storeId: string;
  storeContactName: string;
  storeAddress: string;
  storePhoneNumber: number;
  storeEmail: string;
  storeCommissionRate: number;

  /*constructor(ID?: number, storeOwnerId?: string, storeId?: string, storeContactName?: string, storeAddress?: string, storePhoneNumber?: number, storeEmail?: string, storeCommissionRate?: number) {
    this.ID = storePhoneNumber;
    this.storeOwnerId = storeOwnerId;
    this.storeId = storeId;
    this.storeContactName = storeContactName;
    this.storeAddress = storeAddress;
    this.storePhoneNumber = storePhoneNumber;
    this.storeEmail = storeEmail;
    this.storeCommissionRate = storeCommissionRate;
  }*/

  /*deserialize(input: any): this {
    return Object.assign(this, input);
  }*/
}
