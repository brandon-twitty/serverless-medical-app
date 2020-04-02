import {Component, OnInit, ViewChild} from '@angular/core';
import {SidenavService} from "../shared/sidenav.service";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.scss']
})
export class LeftSidenavComponent implements OnInit {
  panelOpenState: boolean = true;
  @ViewChild('leftSideNav', {static:false}) public sidenav: MatSidenav;
  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

}
