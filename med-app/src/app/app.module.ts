import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CreateOwnerComponent } from './owners/create-owner/create-owner.component';
import { ListOwnersComponent } from './owners/list-owners/list-owners.component';
import { EditOwnersComponent } from './owners/edit-owners/edit-owners.component';
import { EditStoreComponent } from './stores/edit-store/edit-store.component';
import { ListStoresComponent } from './stores/list-stores/list-stores.component';
import { AddStoreComponent } from './stores/add-store/add-store.component';
import {OwnerService} from './shared/services/owner.service';
import {PatientService} from './shared/services/patient.service';
import {StoreService} from './shared/services/store.service';
import { GetStoreComponent } from './stores/get-store/get-store.component';
import { AddAgentComponent } from './agent/add-agent/add-agent.component';
import { ListAgentComponent } from './agent/list-agent/list-agent.component';
import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from "@angular/common";
import {config} from "rxjs";
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetOwnerDetailsComponent } from './owners/get-owner-details/get-owner-details.component';

import {OwnersDataSource} from "./owners/OwnersDataSource";
import {AngularMaterialModule} from "./material/material.module";
import {SidenavService} from "./shared/sidenav.service";
import { SidenavComponent } from './sidenav/sidenav.component';
import { LeftSidenavComponent } from './left-sidenav/left-sidenav.component';
import {MatExpansionModule} from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ScheduleComponent,
    CreateOwnerComponent,
    ListOwnersComponent,
    EditOwnersComponent,
    EditStoreComponent,
    ListStoresComponent,
    AddStoreComponent,
    GetStoreComponent,
    AddAgentComponent,
    ListAgentComponent,
    DashboardComponent,
    GetOwnerDetailsComponent,
    SidenavComponent,
    LeftSidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule

  ],
  providers: [OwnerService, PatientService, StoreService, OwnersDataSource, SidenavService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
