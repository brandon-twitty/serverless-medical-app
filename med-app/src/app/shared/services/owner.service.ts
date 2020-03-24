import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Owner} from '../models/owner';
import {catchError, tap} from 'rxjs/operators';
import {ApiResponse} from '../models/api.response';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
// const createOwnerApi = '/create-owner/';
const getOwnerApi = 'https://xgfb4yibtd.execute-api.us-east-2.amazonaws.com/dev/get-owner/';
const getOwnerByIdApi = '';
@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  ownerApi = 'https://xgfb4yibtd.execute-api.us-east-2.amazonaws.com/dev';

  public firstPage: string = '';
  public prevPage: string = '';
  public nextPage: string = '';
  public lastPage: string = '';

  constructor(private http: HttpClient) { }

  parse_link_header(header) {
    if (header.length === 0) {
      return ;
    }

    const parts = header.split(',');
    const links = {};
    parts.forEach( p => {
      const section = p.split(';');
      const url = section[0].replace(/<(.*)>/, '$1').trim();
      const name = section[1].replace(/rel='(.*)'/, '$1').trim();
      links[name] = url;

    });
    return links;
  }

  public retrieve_pagination_links(response) {
    const linkHeader = this.parse_link_header(response.headers.get('Link'));
    this.firstPage = linkHeader['first'];
    this.lastPage =  linkHeader['last'];
    this.prevPage =  linkHeader['prev'];
    this.nextPage =  linkHeader['next'];
  }

  public  getOwners() {
    return this.http.get<Owner[]>(`${this.ownerApi}/list-owners`);
  }
  public getOwnersPage(url?: string) {

    if (url) {
      return this.http.get<Owner[]>(url, { observe: 'response' }).pipe(tap(res => {
        this.retrieve_pagination_links(res);
      }));
    }

    return this.http.get<Owner[]>(`${this.ownerApi}/list-owners?page=1`,
      { observe: 'response' }).pipe(tap(res => {
      this.retrieve_pagination_links(res);
    }));
  }
  public getOwnerById(ID: number) {
    return this.http.get(`${this.ownerApi}/get-owner/${ID}`);
  }
  public createOwner(owner: Owner) {
    return this.http.post(`${this.ownerApi}/create-owner/${owner.ID}`, owner, httpOptions);
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
