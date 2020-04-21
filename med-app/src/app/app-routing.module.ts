import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CreateOwnerComponent} from './owners/create-owner/create-owner.component';
import {EditOwnersComponent} from './owners/edit-owners/edit-owners.component';
import {AddStoreComponent} from './stores/add-store/add-store.component';
import {EditStoreComponent} from './stores/edit-store/edit-store.component';
import {ListStoresComponent} from './stores/list-stores/list-stores.component';
import {ListOwnersComponent} from './owners/list-owners/list-owners.component';
import {GetStoreComponent} from './stores/get-store/get-store.component';
import {GetOwnerDetailsComponent} from "./owners/get-owner-details/get-owner-details.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

import {ListPatientsComponent} from "./list-patients/list-patients.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardComponent,
    data: {title: 'Dashboard'}
  },
  {
    path: 'create-owner',
    component: CreateOwnerComponent
  },
  {
    path: 'edit-owner/:ID',
    component: EditOwnersComponent
  },
  {
    path: 'list-owners',
    component: ListOwnersComponent
  },
  {
    path: 'owner-details/:ID',
    component: GetOwnerDetailsComponent
  },
  {
    path: 'add-store',
    component: AddStoreComponent
  },
  {
    path: 'edit-store/:ID',
    component: EditStoreComponent
  },
  {
    path: 'get-store/:ID',
    component: GetStoreComponent
  },
  {
    path: 'list-stores/:storeOwnerId',
    component: ListStoresComponent
  },
  {
    path: 'list-patients',
    component: ListPatientsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
