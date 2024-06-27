import { Component, OnInit } from '@angular/core';
import { WeatherDetail, WeatherDetailDto } from 'src/app/shared/models/weather-detail.model';
import { WeatherService } from 'src/app/shared/weatherForecastService/weather.service';
import { TableModule } from 'primeng/table';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  listWeather:WeatherDetail[]=[];
  dialogForm: FormGroup<WeatherDetailDto>;

  constructor(private weatherService : WeatherService) {

    this.dialogForm = new FormGroup<WeatherDetailDto>({
      date: new FormControl(new Date()),
      temperatureC: new FormControl(0),
      temperatureF: new FormControl(0),
      summary: new FormControl('')
    });
   }

  ngOnInit(): void {


    this.weatherService.getEntries().subscribe((response : WeatherDetail[])=>{
      this.listWeather = response;
      console.log( this.listWeather)
    });

}
}
