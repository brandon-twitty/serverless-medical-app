import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbStepperModule,
  NbCardModule,
  NbButtonModule,
  NbInputModule, NbSelectModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { IntroComponent } from './intro/intro.component';
import { ScheduleComponent } from './schedule/schedule.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { CreateOwnerComponent } from './owners/create-owner/create-owner.component';
import { ListOwnersComponent } from './owners/list-owners/list-owners.component';
import { EditOwnersComponent } from './owners/edit-owners/edit-owners.component';
import { GetOwnerComponent } from './owners/get-owner/get-owner.component';
import { GetStoresComponent } from './stores/get-stores/get-stores.component';
import { EditStoreComponent } from './stores/edit-store/edit-store.component';
import { ListStoresComponent } from './stores/list-stores/list-stores.component';
import { AddStoreComponent } from './stores/add-store/add-store.component';
import {OwnerService} from './shared/services/owner.service';
import {PatientService} from './shared/services/patient.service';
import {StoreService} from './shared/services/store.service';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ScheduleComponent,
    CreateOwnerComponent,
    ListOwnersComponent,
    EditOwnersComponent,
    GetOwnerComponent,
    GetStoresComponent,
    EditStoreComponent,
    ListStoresComponent,
    AddStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule
  ],
  providers: [OwnerService, PatientService, StoreService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
