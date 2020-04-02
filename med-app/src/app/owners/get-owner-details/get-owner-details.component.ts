import { Component, OnInit } from '@angular/core';
import {OwnerService} from "../../shared/services/owner.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Owner} from "../create-owner/_models/owner";

@Component({
  selector: 'app-get-owner-details',
  templateUrl: './get-owner-details.component.html',
  styleUrls: ['./get-owner-details.component.scss']
})
export class GetOwnerDetailsComponent implements OnInit {
  ID: any;
  ownerData: any = [];

  constructor(private ownerService: OwnerService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
   this.activeRoute.params.subscribe(params => {
     this.ID = params;
     console.log(params)
   });
    this.loadOwnerDetails(this.ID)
  }
  loadOwnerDetails(ID) {
    this.ownerService.getOwnerById(ID).subscribe(data => {
      console.log(data);
      this.ownerData = data;
    })
  }
  navigation(link){
    this.router.navigate([link]);
  }

}
