import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponentt implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log("formulario posteado")

  }

 

}
