import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgZone, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from "@angular/router";
import {StoreService} from "../../shared/services/store.service";
import {Store} from "..";

@Component({
  selector: 'app-add-store',
  templateUrl: './add-store.component.html',
  styleUrls: ['./add-store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddStoreComponent implements OnInit {
  storeForm: FormGroup;
  newStore: Store = new Store;
  @Input() index: number;
  @Output() deleteStore: EventEmitter<number> = new EventEmitter();

  constructor(private fb: FormBuilder, private router: Router, private storeService: StoreService,  private ngZone: NgZone) { }

  ngOnInit(): void {
    this.addStoreForm()
  }
  addStoreForm(){
    this.storeForm = this.fb.group({
      ID: [''],
    storeOwnerId: [''],
    storeId: [''],
    storeContactName: [''],
    storeAddress: [''],
    storePhoneNumber: [''],
    storeEmail: [''],
    storeCommissionRate: ['']
    })
  }
  formatDate(e) {
    let convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    this.storeForm.get('dob').setValue(convertDate, {
      onlyself: true
    })
  }
  submitStoreForm(){
    this.newStore = this.storeForm.value;
    this.newStore.ID = this.storeForm.controls.storePhoneNumber.value;
    this.newStore.storeOwnerId = '12345678';
    this.newStore.storeId = '123456';
    this.newStore.storeCommissionRate = 15;
    console.log(this.newStore);
    this.saveStore();
    return this.newStore;
  }
  saveStore(){
    let storeOwnerId = this.storeForm.controls.storeOwnerId.value;
    this.storeService.createStore(this.newStore)
      .subscribe(data => {
        console.log(this.newStore);
        this.ngZone.run(() => this.router.navigateByUrl(`/list-stores/${storeOwnerId}`));
      })
  }
  delete() {
    this.deleteStore.emit(this.index);
  }
}
