import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { FormsModule } from '@angular/forms';
import { BasicosComponentt } from './basicos/basicos.component';
import { DinamicosComponentt } from './dinamicos/dinamicos.component';
import { SwitchesComponentt } from './switches/switches.component';



@NgModule({
  declarations: [
    BasicosComponentt,
    DinamicosComponentt,
    SwitchesComponentt,
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule
  ]
})
export class TemplateModule { }
