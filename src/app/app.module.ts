import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {LoginComponent} from './login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import{MatInputModule} from "@angular/material/input";
import{MatButtonModule} from "@angular/material/button";
import{MatCardModule} from '@angular/material/card';
import { CoronaStatusComponent } from './corona-status/corona-status.component';
import { HeaderComponent } from './header/header.component';
import { RoomListComponent } from './room-list/room-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoronaStatusComponent,
    HeaderComponent,
    RoomListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent}
    ]),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
