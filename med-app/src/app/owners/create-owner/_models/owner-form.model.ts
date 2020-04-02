import {FormArray, FormControl} from '@angular/forms';
import {Owner} from './owner';

export class OwnerForm {
  OwnersFirstName = new FormControl();
  OwnersLastName = new FormControl();
  OwnersPhoneNumber = new FormControl();
  OwnersEmailAddress = new FormControl();
  OwnersPaymentMethod = new FormControl();
  OwnersCommissionRate = new FormControl();
  agentId = new FormControl();
  //agents = new FormArray([]);
 // stores = new FormArray([]);
  //patients = new FormArray([]);

  constructor(owner: Owner) {
      if (owner.OwnersFirstName) {
        this.OwnersFirstName.setValue(owner.OwnersFirstName);
      }
      if (owner.OwnersLastName) {
        this.OwnersLastName.setValue(owner.OwnersLastName);
      }
      if (owner.OwnersPhoneNumber) {
        this.OwnersPhoneNumber.setValue(owner.OwnersPhoneNumber);
      }
      if (owner.OwnersEmailAddress) {
        this.OwnersEmailAddress.setValue(owner.OwnersEmailAddress);
      }
      if (this.OwnersPaymentMethod) {
        this.OwnersPaymentMethod.setValue(owner.OwnersPaymentMethod);
      }
      if (this.OwnersCommissionRate) {
        this.OwnersCommissionRate.setValue(owner.OwnersCommissionRate);
      }
      if (owner.agentId) {
        this.agentId.setValue(owner.agentId);
      }
      /*if (owner.patients) {
        this.patients.setValue(owner.patients);
      }*/

  }
}
