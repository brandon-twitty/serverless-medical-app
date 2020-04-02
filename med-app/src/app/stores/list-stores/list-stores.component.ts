import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StoreService} from "../../shared/services/store.service";
import {Store} from "..";

@Component({
  selector: 'app-list-stores',
  templateUrl: './list-stores.component.html',
  styleUrls: ['./list-stores.component.scss']
})
export class ListStoresComponent implements OnInit {
  currentOwner = null;
  store: Store;
  stores = [];

  constructor(private route: ActivatedRoute, private storeService: StoreService, private router: Router, private ngZone: NgZone,) {

   /* let storeOwnerId = this.route.snapshot.paramMap.get('ID');
    this.storeService.getStoreByOwner(storeOwnerId).subscribe(data => {
      console.log(data.storeOwnerId)
    })*/
  }

  ngOnInit(): void {

  }
  getStoresByOwner(storeOwnerId) {
    console.log(storeOwnerId);
   this.storeService.getStoreByOwner(storeOwnerId).subscribe(store => this.store = store);

  }
}
