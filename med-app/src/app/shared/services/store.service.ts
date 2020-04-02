import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Owner} from "../../owners/create-owner/_models/owner";
import {Store} from "../../stores";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  storeApi = 'https://c0wr2xmade.execute-api.us-east-2.amazonaws.com/dev';

  constructor(private http: HttpClient) { }

  public createStore(store: Store) {
    return this.http.post(`${this.storeApi}/create-convenience-store/${store.ID}`, store, httpOptions);
  }
  public getStoreByOwner(storeOwnerId): Observable<Store> {
    return this.http.get<Store>(`${this.storeApi}/get-stores-owner/${storeOwnerId}`).pipe(
      catchError(() => throwError("Store not Found"))
    )
  }
}
