
import {Owner} from '../create-owner/_models/owner';
import {OwnerService} from '../../shared/services/owner.service';

import {OwnersDataSource} from '../OwnersDataSource';
import {Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CreateOwnerComponent} from "../create-owner/create-owner.component";
import {Router} from "@angular/router";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";



@Component({
  selector: 'app-list-owners',
  templateUrl: './list-owners.component.html',
  styleUrls: ['./list-owners.component.scss']
})
export class ListOwnersComponent implements OnInit {


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef;

  @Input() owner: Owner[];
  ID: any;
  OwnerData: any = [];
  dataSource: MatTableDataSource<Owner>;
  owners: Owner[];
  selectedOwner: Owner = new Owner();
  displayedColumns = ['ID', 'OwnersFirstName', 'OwnersLastName', 'OwnersPhoneNumber', 'OwnersEmailAddress', 'action'];
  ownerDataSource: OwnersDataSource;
  constructor(public ownersService: OwnerService,  private http: HttpClient, private router: Router) {
    this.ownersService.getOwners().subscribe(data => {
      this.OwnerData = data;
      this.dataSource = new MatTableDataSource<Owner>(this.OwnerData);
      setTimeout(()=> {
        this.dataSource.paginator = this.paginator;
      }, 0)
      }
    )
  }
  ngOnInit(): void {
    this.getOwners();
    this.ownerDataSource = new OwnersDataSource(this.ownersService);

  }

  getOwners() {
    this.owners = [];
    this.ownersService.getOwners().subscribe((data: []) => {
      console.log(data);
      this.owners = data;
    });
  }
  gotoOwnerDetails(url, id){
    this.router.navigate([url, id]).then((e)=> {
      if(e) {
        console.log('navigation success');
      } else {
        console.log('navigation failed')
      }
    })

  }
  deleteOwner(ID){
    this.ownersService.deleteOwner(ID).subscribe(res => {
      console.log(res);
      this.owners.splice(ID, 1);
    });
}
  onChangeObj(newOwner) {
    console.log(newOwner);
    this.selectedOwner = newOwner;
    return this.selectedOwner;
  }
  ownerDetails(ID: number){
    this.router.navigate(['details', ID]).then(r =>
    console.log(r));
  }

}
