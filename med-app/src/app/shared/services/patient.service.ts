import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  createPatientApi = 'https://wrmnx4jqu9.execute-api.us-east-2.amazonaws.com/dev/create-patient/';
  getPatientApi = 'https://wrmnx4jqu9.execute-api.us-east-2.amazonaws.com/dev/get-patient/';
  constructor(private http: HttpClient) { }
}
