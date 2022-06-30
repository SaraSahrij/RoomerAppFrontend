import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.models';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // constructor(private weatherService: WeatherService) {

  // }

  constructor() { }

  // cityName: string = 'Dortmund'
  // weatherData?: WeatherData

  ngOnInit(): void {
    // this.getWeatherData(this.cityName);
  }

  // onSubmit() {
  //   this.getWeatherData(this.cityName);
  //   this.cityName = '';
  // }

  // private getWeatherData(cityName: string) {
  //   this.weatherService.getWeatherData(cityName)
  //     .subscribe({
  //       next: (respone) => {
  //         this.weatherData = respone;
  //         console.log(respone);
  //       }
  //     });
  // }

  title = 'RoomerAppFrontend';
}
