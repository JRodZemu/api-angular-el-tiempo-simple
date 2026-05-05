import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintComponent } from './paint/paint.component';



@NgModule({
  declarations: [PaintComponent],
  imports: [
    CommonModule
  ],
  exports: [PaintComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentesModule { }
