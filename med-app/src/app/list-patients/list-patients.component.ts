import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Patient} from "../shared/models/patient";
import {PatientService} from "../shared/services/patient.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.scss']
})
export class ListPatientsComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef;
  ID: any;
  PatientsData: any = [];
  dataSource: MatTableDataSource<Patient>;
  patients: Patient[];

  displayedColumns = ['ID', 'patientsFirstName', 'patientsLastName', 'patientsPhoneNumber', 'patientsEmailAddress','appointmentDate', 'action'];

  constructor(public patientService: PatientService, private http: HttpClient, private router: Router) {
    this.patientService.getPatients().subscribe(data => {
      this.PatientsData = data;
      this.dataSource = new MatTableDataSource<Patient>(this.PatientsData);
      setTimeout(()=> {
        this.dataSource.paginator = this.paginator;
      }, 0)
    }
    )
  }

  ngOnInit() {
    this.getPatients();
  }
  getPatients(){
    this.patients = [];
    this.patientService.getPatients().subscribe((data: [])=> {
      console.log(data);
      this.patients = data;
    });
  }
}
