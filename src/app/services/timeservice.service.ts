import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Time} from './../models/time';

@Injectable({
  providedIn: 'root'
})
export class TimeserviceService {
 
  private url_service: string = "https://api.openweathermap.org/data/2.5/weather?units=metric"
  private api_key: string = "774396eca2c42b768d4825df06754bc1"

  constructor(private http: HttpClient) { }

  /**
   * get_time: Consigue el tiempo de la api de weatherobserved
   * @param lat   parámetro con la latitud de la ubicación para traer el tiempo
   * @param lon   parámetro con la longitud de la ubicación para traer el tiempo
   */
  get_weather(lat: string, lon: string):Observable<any> {
    //Montamos la dirección de la url del servicio completo con los parámetros de entrada:
    let url:string = this.url_service +"&lat=" + lat + "&lon=" + lon +"&appid="+this.api_key;
    return this.http.get(url);

  }


}
