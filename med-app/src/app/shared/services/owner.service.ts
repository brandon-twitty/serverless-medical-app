import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {Owner} from '../../owners/create-owner/_models/owner';
import {OwnerForm} from '../../owners/create-owner/_models/owner-form.model';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {StoreForm, Store} from '../../stores';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  ownerApi = 'https://xgfb4yibtd.execute-api.us-east-2.amazonaws.com/dev';

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  private ownerForm: BehaviorSubject<FormGroup | undefined> =
    new BehaviorSubject(this.fb.group(
      new OwnerForm(new Owner())));
  ownerForm$: Observable<FormGroup> = this.ownerForm.asObservable();

  addStore() {
    const currentOwner = this.ownerForm.getValue();
    const currentStores = currentOwner.get('stores') as FormArray;

    currentStores.push(
      this.fb.group(
        new StoreForm(new Store())
      )
    );
    this.ownerForm.next(currentOwner);
  }

  public  getOwners(): Observable<any> {
    return this.http.get(this.ownerApi + '/get-owners');
  }

  public getOwnerById(ID): Observable<Owner> {
    return this.http.get<Owner>(`${this.ownerApi}/get-owner/${ID}`, httpOptions);

  }
  public createOwner(owner: Owner) {
    return this.http.post(`${this.ownerApi}/create-owner/${owner.ID}`, owner, httpOptions);
  }
  deleteOwner(ID) {
    return this.http.get(`${this.ownerApi}/delete-owner/${ID}`, httpOptions );
  }
}
