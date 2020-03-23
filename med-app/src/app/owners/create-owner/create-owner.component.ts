import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.scss']
})
export class CreateOwnerComponent implements OnInit {
  createOwnerForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.createOwnerForm = this.fb.group({
      OwnersFirstName: [''],
      OwnersLastName: [''],
      OwnersPhoneNumber: [''],
      OwnersEmailAddress: [''],
      OwnersPaymentMethod: [''],
      OwnersCommissionRate: ['']
    });
  }
  ngOnInit(): void {

  }

}
