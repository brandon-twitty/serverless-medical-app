import {ChangeDetectionStrategy, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {Owner} from "./owners/create-owner/_models/owner";
import {OwnerService} from "./shared/services/owner.service";
import {HttpClient} from "@angular/common/http";
import {OwnersDataSource} from "./owners/OwnersDataSource";
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from "@angular/router";
import {MatSidenav} from "@angular/material/sidenav";
import {SidenavService} from "./shared/sidenav.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  opened = true;

  allOwners: Owner[];
  selectedOwner: Owner = new Owner();
  fullname: string;
  storeOwnerId: number;

  constructor(public ownersService: OwnerService, private http: HttpClient, private router: Router, public sidenav: SidenavService) {

  }
  ngOnInit(): void {
  }

  /* getOwners() {
     this.allOwners = [];
     this.ownersService.getOwners().subscribe((data: []) => {
       console.log(data);
       this.allOwners = data;
     });
     this.selectedOwner = this.allOwners[1];
     console.log(this.storeOwnerId + 'test')
   }
   onChangeObj(newOwner) {
     console.log(newOwner);
     this.selectedOwner = newOwner;
     console.log(this.selectedOwner.ID);
     this.storeOwnerId = this.selectedOwner.ID;

   }
   getOwnerDetails(ownerId: any) {
     this.router.navigate((['/get-owner/', ownerId])).then(r =>
       console.log('next task'));
   }
   gotoOwnersStores(storeOwnerId: any){
     this.router.navigate(['/list-stores/', storeOwnerId]).then(r =>
     console.log('this.selectedOwner'));
   }*/

}

