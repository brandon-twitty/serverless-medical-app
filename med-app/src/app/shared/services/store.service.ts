import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Owner} from "../../owners/create-owner/_models/owner";
import {Store} from "../../stores";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {JS} from "aws-amplify";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  storeApi = ' https://c0wr2xmade.execute-api.us-east-2.amazonaws.com/dev';

  constructor(private http: HttpClient) { }

  public createStore(store: Store) {
    JSON.stringify(store);
    console.log(store);

    return this.http.post(`${this.storeApi}/create-convenience-store/${store.ID}`, store, httpOptions);
  }
  public getStoreByOwner(storeOwnerId): Observable<any> {
    //JSON.parse(storeOwnerId);
    console.log('stores by owner service', `${storeOwnerId}`);
    return this.http.get<any>(`${this.storeApi}/get-stores-by-owner/${storeOwnerId}`).pipe(

      catchError(() => throwError("Store not Found"))
    )
  }
}
