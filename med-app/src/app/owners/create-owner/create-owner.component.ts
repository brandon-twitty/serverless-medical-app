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

  newOwner: Owner = new Owner();
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

    this.newAgent = this.addReceivingAgentForm.value;
    this.saveOwner();
  }
  gotoStoreDetails(url, id){
    this.router.navigate([url, id]).then((e)=> {
      if(e) {
        console.log('navigation success');
      } else {
        console.log('navigation failed')
      }
    })

  }
  saveOwner() {
  this.newOwner = this.ownerForm.value;
    this.newOwner.ID = this.ownerForm.controls.OwnersPhoneNumber.value;
    this.ownerService.createOwner(this.newOwner)
      .subscribe(data => {
        console.log(data);
        this.gotoStoreDetails('/owner-details', this.newOwner.ID);

      });
  }
}
