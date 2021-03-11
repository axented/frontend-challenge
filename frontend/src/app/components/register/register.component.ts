import { Component, OnInit } from '@angular/core';
/*Reactive Forms-------------------------------------*/
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {


    formulario: FormGroup;

    constructor( private formBuilder:FormBuilder ) {
        this.crearFormulario();
    }
  
    ngOnInit(): void {
    }

    crearFormulario(){
      this.formulario = this.formBuilder.group({  
        name           :  [ '' ],
        website        :  [ '' ],
        picture_url    :  [ '' ],
        email          :  [ '' ],
      });
    }

    guardar(){  
    }
}
