import {FormControl} from '@angular/forms';
import {Store} from '../shared/models/store';

export class StoreForm {
  ID = new FormControl();
  storeOwnerId = new FormControl();
  storeContactName = new FormControl();
  storeAddress = new FormControl();
  storePhoneNumber = new FormControl();
  storeEmail = new FormControl();
  storeCommissionRate = new FormControl();

  constructor(
    store: Store
  ) {
    this.ID.setValue(store.storePhoneNumber);
    this.storeOwnerId.setValue(store.storeOwnerId);
    this.storeCommissionRate.setValue(store.storeCommissionRate);
    this.storeContactName.setValue(store.storeContactName);
    this.storeAddress.setValue(store.storeAddress);
    this.storePhoneNumber.setValue(store.storePhoneNumber);
    this.storeEmail.setValue(store.storeEmail);
  }
}
