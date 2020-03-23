import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Owner} from '../models/owner';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const createOwnerApi = 'https://xgfb4yibtd.execute-api.us-east-2.amazonaws.com/dev/create-owner/';
const getOwnerApi = 'https://xgfb4yibtd.execute-api.us-east-2.amazonaws.com/dev/get-owner/';
const getOwnerByIdApi = '';
@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }
  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(getOwnerApi)
      .pipe(
        tap(owners => console.log('fetched owners')),
        catchError(this.handleError('getOwners', []))
      );
  }
  getOwner(ownersPhoneNumber: number): Observable<Owner> {
    const url = '${getOwnerByIdApi}/${ownersPhoneNumber}';
    return this.http.get<Owner>(url).pipe(
      tap(_ => console.log('fetched owner ${Owner.FirstName}' + '${Owner.LastName}')),
      catchError(this.handleError<Owner>('getOwner phone number = ${ownersPhoneNumber}'))
    );
  }
  addOwner(owner, ownerPhoneNumber): Observable<Owner> {
   return this.http.post<Owner>(createOwnerApi + ownerPhoneNumber, owner, httpOptions).pipe(
     tap((owner: Owner) => console.log('added owner with id = ${owner.id}')),
     catchError(this.handleError<Owner>('addOwner'))

     );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
