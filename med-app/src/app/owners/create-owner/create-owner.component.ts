import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OwnerService} from '../../shared/services/owner.service';
import {Router} from '@angular/router';
import {Owner} from '../../shared/models/owner';

@Component({
  selector: 'app-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.scss']
})
export class CreateOwnerComponent implements OnInit {

  newOwner: Owner = new Owner();
  createOwnerForm: FormGroup;
  addReceivingAgentForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private ownerService: OwnerService) {
    this.createForm();
  }
  createForm() {
    this.createOwnerForm = this.fb.group({
      OwnersFirstName: [''],
      OwnersLastName: [''],
      ID: [''],
      OwnersEmailAddress: [''],
      OwnersPaymentMethod: [''],
      OwnersCommissionRate: [''],
      ReceivingAgent: [''],
      ReceivingAgentCommissionRate: ['']
    });
    this.addReceivingAgentForm = this.fb.group({
      receivingAgentName: [''],
      raEmail: [''],
      raPhoneNumber: ['']
    });
  }
  ngOnInit(): void {

  }
  /*onFormasubmit(){
    this.newOwner.ID = this.createOwnerForm
  }*/
  get myForm() {
    return this.createOwnerForm.controls;
  }
  addAgent(){

  }
  onFormSubmit() {
    this.ownerService.createOwner(this.createOwnerForm.value)
      .subscribe(data => {
        console.log(this.createOwnerForm.value);

      });
  }
}
