import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {SidenavService} from "../shared/sidenav.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav', {static:false}) public sidenav: MatSidenav;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {
    this.sidenavService.setSidenav(this.sidenav);
  }

}
