import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../models/weather.models';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  cityName: string = 'Dortmund'
  weatherData?: WeatherData

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = 'Dortmund';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next: (respone) => {
          this.weatherData = respone;
          console.log(respone);
        }
      });
  }
}
