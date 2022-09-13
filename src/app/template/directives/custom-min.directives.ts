import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi:true
    }]

})

export class CustomMinDirective implements Validator{
    //para recibirlo del padre al valor de minimo del selector y se usa el ! para indicar que siempre va a tener un valor
    @Input() minimo!:number;

    constructor(){
        console.log('Directiva', this.minimo);
    }
    // la funcion validate tiene que retornar un null o true o false para que sea valido
    validate(control:FormControl){
        const inputValue = control.value;
        //console.log(this.minimo)

        //console.log(inputValue);
        //return null;
        //se hacen las validaciones a continuacion si es menor devulve null y si es true devuelve el error con el valor 
        return (inputValue < this.minimo)
                ? {'customMin':true}
                : null;
    }

}