import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  createStoreApi = ' https://c0wr2xmade.execute-api.us-east-2.amazonaws.com/dev/create-convenience-store/';
  getStoreApi = 'https://c0wr2xmade.execute-api.us-east-2.amazonaws.com/dev/get-convenience-store/';
  constructor(private http: HttpClientModule) { }
}
