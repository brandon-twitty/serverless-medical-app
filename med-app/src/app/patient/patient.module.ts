import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { AddPatientComponent } from './add-patient/add-patient.component';


@NgModule({
  declarations: [AddPatientComponent],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
