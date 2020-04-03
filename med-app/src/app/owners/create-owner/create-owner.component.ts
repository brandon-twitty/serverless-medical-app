import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {OwnerService} from '../../shared/services/owner.service';
import {Router} from '@angular/router';
import {Owner} from './_models/owner';
import {AgentService} from '../../shared/services/agent.service';
import {ReceivingAgent} from '../../agent/_models/receiving-agent';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.scss']
})
export class CreateOwnerComponent implements OnInit, OnDestroy {

  // newOwner: Owner = new Owner();
  ownerForm: FormGroup;
  ownerFormSub: Subscription;
  agents: FormArray;
  storeFormSub: Subscription;
  store: FormArray;
  addReceivingAgentForm: FormGroup;
  addAgentForm = true;
  newAgent: ReceivingAgent = new ReceivingAgent();

  constructor(private fb: FormBuilder, private router: Router, private ownerService: OwnerService, private agentService: AgentService) {

  }

  ngOnInit(): void {
    this.ownerFormSub = this.ownerService.ownerForm$
      .subscribe(owner => {
        this.ownerForm = owner;
        this.agents = this.ownerForm.get('agents') as FormArray;
        this.store = this.ownerForm.get('stores') as FormArray;
      });
  }
  ngOnDestroy(): void {
    this.ownerFormSub.unsubscribe();
  }

  get myForm() {
    return this.ownerForm.controls;
  }
  /*get agentId() {
    this.newAgent.ID = this.addReceivingAgentForm.controls.raPhoneNumber.value;
    return this.addReceivingAgentForm.get('raPhoneNumber') as FormArray;
  }
  createAgent(): FormGroup {
    return this.fb.group({
      receivingAgentName: [''],
      raEmail: [''],
      raPhoneNumber: ['']
    });
  }*/
  /*addStore() {
    this.ownerService.addStore();
  }
  deleteStore(index: number) {
    this.ownerService.deleteStore(index);
  }*/

  addAgent(): void {
    this.addAgentForm = !this.addAgentForm;
    this.ownerForm.patchValue({
      agentId: ['agent.raPhoneNumber']
    });
  }
  onFormSubmit() {
    this.ownerForm.get('raPhoneNumber').valueChanges.subscribe(
      value => {
        this.ownerForm.patchValue({
          agentId: [value]
        });
      }
    );
    // this.newOwner = this.ownerForm.value;
    this.newAgent = this.addReceivingAgentForm.value;
    this.saveOwner();
  }
  saveOwner() {
    // this.newOwner = this.ownerForm.value;
    /*this.newAgent = this.addReceivingAgentForm.value;
    this.agentService.addAgent(this.newAgent)
      .subscribe(data => {
        console.log(this.addReceivingAgentForm);
      });*/
    this.ownerService.createOwner(this.ownerForm.value)
      .subscribe(data => {
        console.log(this.ownerForm.value);

      });
  }
}
