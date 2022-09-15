import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponentt{

  persona = {
    genero: 'F',
    notificaciones :true,
  }

  terminosYcondiciones: boolean = false;

  
}
