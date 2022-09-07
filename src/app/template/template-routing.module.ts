import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponentt } from './basicos/basicos.component';
import { DinamicosComponentt } from './dinamicos/dinamicos.component';
import { SwitchesComponentt } from './switches/switches.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'basicos', component: BasicosComponentt},
      { path:'dinamicos', component: DinamicosComponentt},
      { path:'switches', component: SwitchesComponentt},
      { path:'basicos', component: BasicosComponentt},
      {path:'**', redirectTo: 'basicos'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
