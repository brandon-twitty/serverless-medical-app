import {Component, ElementRef, Input, NgZone, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StoreService} from "../../shared/services/store.service";
import {Store} from "..";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Owner} from "../../owners/create-owner/_models/owner";

@Component({
  selector: 'app-list-stores',
  templateUrl: './list-stores.component.html',
  styleUrls: ['./list-stores.component.scss']
})
export class ListStoresComponent implements OnInit {
  private currentOwner = '';
  @Input() ID: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('filter',  {static: true}) filter: ElementRef;

  StoresData: any [];
  dataSource: MatTableDataSource<Store>;
  ownerStoreId: any;

  public store = [];
  displayedColumns = ['storeContactName', 'storeAddress', 'storePhoneNumber', 'storeEmail','totalScanned','totalBooked','moneyOwed','moneyPaid', 'action'];
  constructor(private activeRoute: ActivatedRoute, private storeService: StoreService, private router: Router, private ngZone: NgZone,) {

  }

  ngOnInit(): void {
    console.log(JSON.parse(this.ID.ID));
   this.ownerStoreId = this.ID.ID;
   this.getListOfOwnersStores(this.ownerStoreId);
  }
  getListOfOwnersStores(ownerStoreId){
    this.storeService.getStoreByOwner(ownerStoreId).subscribe((data:[]) => {
      console.log(data);
      this.StoresData = data;
      this.dataSource = new MatTableDataSource<Store>(this.StoresData);
      setTimeout(()=> {
        this.dataSource.paginator = this.paginator;
      }, 0)
    });
}
  gotoStoreDetails(url, id){
    this.router.navigate([url, id]).then((e)=> {
      if(e) {
        console.log('navigation success');
      } else {
        console.log('navigation failed')
      }
    })

  }
  addStore(){

  }
}
