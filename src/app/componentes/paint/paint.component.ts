import { Component, OnInit, Input } from '@angular/core';
import {TimeSend} from './../../models/timesend'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.scss'],
})
export class PaintComponent  implements OnInit {
  public tiempoen:string ="El tiempo en";
  public tmin:string="Temperatura minima:";
  public tmax:string="Temperatura máxima:";
 public humedad:string="Humead relativa:";
 public velocidad:string="Velocidad del viento:";

  @Input('tiempo') tiempo: TimeSend;
  url_icon:string="https://openweathermap.org/img/w/";
  

  constructor() {
    this.tiempo= {nombre: "", icono: "", temp_min: 0, temp_max: 0, humedad: 0, velocidad: 0 };
   }

  ngOnInit() {
  }

  get_image()
  {
    return this.url_icon+this.tiempo.icono+".png";
  }

}
