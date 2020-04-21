import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {Patient} from "../models/patient";
import {Owner} from "../../owners/create-owner/_models/owner";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patientApi = 'https://wrmnx4jqu9.execute-api.us-east-2.amazonaws.com/dev';

  constructor(private http: HttpClient) {
  }

  public getPatients(): Observable<any> {
    return this.http.get(this.patientApi + '/get-patients');
  }


  public createPatient(patient: Patient) {
    return this.http.post(`${this.patientApi}/create-patient/${patient.ID}`, patient, httpOptions);
  }

  deletePatient(ID) {
    return this.http.get(`${this.patientApi}/delete-patient/${ID}`, httpOptions);
  }
}
