import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { CoronaStatusComponent } from './corona-status/corona-status.component';
import { HeaderComponent } from './header/header.component';
import { RoomListComponent } from './room-list/room-list.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { BuildingListComponent } from './building-list/building-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CoronaStatusComponent,
    HeaderComponent,
    RoomListComponent,
    FooterComponent,
    WeatherComponent,
    BuildingListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'rooms', component: RoomListComponent },
      { path: 'corona', component: CoronaStatusComponent },
      { path: 'weather', component: WeatherComponent },
      { path: 'buildings', component: BuildingListComponent },
    ]),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
