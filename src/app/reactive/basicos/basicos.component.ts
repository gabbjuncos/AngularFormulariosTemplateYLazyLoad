import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent implements OnInit{

  //miFormulario: FormGroup = new FormGroup({
   // nombre     : new FormControl('RTX 4080ti'),
    //precio     : new FormControl(1500),
    //existencias: new FormControl(5)
  //})

  miFormulario: FormGroup = this.fb.group({
    nombre:[ , [Validators.required, Validators.minLength(3)] ],
    precio: [ , [Validators.required, Validators.min(0)]],
    existencias:[ , [Validators.required, Validators.min(0)]],
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(){
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio:1600
    })
    
  }
  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors
    && this.miFormulario.controls[campo].touched;
  }

  guardar(){
    // si el fomulario es invalido marca a todos los campos como que se han tocado
    // y se ejecuta el return
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }

}
