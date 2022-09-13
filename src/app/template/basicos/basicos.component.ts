import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponentt implements OnInit {

  @ViewChild('miFormulario') miFormulario!:NgForm;

  initForm = {
    producto: 'RTX 4080ti',
    precio: 10,
    existencias:10
  }

  constructor() { }

  ngOnInit(): void {
  }
  guardar(){
    //console.log(this.miFormulario)
    //console.log(this.miFormulario.controls["producto"].invalid)
    console.log('Posteo correcto');
    this.miFormulario.resetForm({
      producto:'Algo',
      precio:0,
      existencias:0
    })
  }
  // valida si el campo producto es valido y si fue tocado
  nombreValido():boolean{
    return this.miFormulario?.controls["producto"]?.invalid
            && this.miFormulario?.controls["producto"]?.touched;
            
  }

  precioValido():boolean{
    //console.log(this.miFormulario?.controls["precio"]?.value);
    return   this.miFormulario?.controls["precio"]?.touched &&
             this.miFormulario?.controls["precio"]?.value < 0;
            
  }

  

}
