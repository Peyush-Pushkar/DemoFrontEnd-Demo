import { FormControl } from "@angular/forms";

export class WeatherDetail {
    date:Date;
    temperatureC:number;
    temperatureF:number;
    summary:string;
    constructor(date:Date, temperatureC:number, temperatureF:number,  summary:string) {
        this.date = date;
        this.temperatureC = temperatureC;
        this.temperatureF = temperatureF;
        this.summary = summary;
      }
     
}

export interface WeatherDetailDto{
    date:FormControl<Date| null>;
    temperatureC:FormControl<number| null>;
    temperatureF:FormControl<number| null>;
    summary:FormControl<string| null>;
}


  
