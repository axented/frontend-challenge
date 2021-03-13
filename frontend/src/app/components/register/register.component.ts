import { Component, OnInit } from '@angular/core';
/*Reactive Forms-------------------------------------*/
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
/*Servicio-------------------------------------------*/
import { BloggersService } from '../../services/bloggers.service';

@Component({
    selector:     'app-register',
    templateUrl:  './register.component.html',
    styleUrls:    ['./register.component.css']
})

export class RegisterComponent implements OnInit {


    formulario          : FormGroup;
    expression_mail     : string = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';

    constructor(    private formBuilder : FormBuilder ,
                    private _bloggersServices : BloggersService ) {            
            this.formulario = this.formBuilder.group({
                id             :  [''],
                name           :  [ '' , [ Validators.required , Validators.minLength(5) ]],
                website        :  [ '' , [ Validators.required , Validators.minLength(5) ]],
                picture_url    :  [ '' , [ Validators.required , Validators.minLength(5) ]],
                email          :  [ '' , [ Validators.required , Validators.minLength(5), Validators.pattern(this.expression_mail) ]],
                friends        :  [ [] ],
        });
    }
  
    ngOnInit(): void {
    }
    
    resetForm(){    
        this.formulario.reset({
            id               :  '',
            name             :  '',
            website          :  '',
            picture_url      :  '',
            email            :  '',
            friends          :  []
        });
    }
    
    save(){
        if( this.formulario.invalid ){
            return this.formulario.markAllAsTouched();
        }        
        this._bloggersServices.pushBlogger(this.formulario.value);
        this.resetForm();    
    }
    
    /*-----------*/
    get NameInvalid():boolean {
        return this.formulario.get('name').invalid         &&     this.formulario.get('name').touched;
    }
    get WebsiteInvalid():boolean {
        return this.formulario.get('website').invalid      &&     this.formulario.get('website').touched;
    }
    get PictureInvalid():boolean {
        return this.formulario.get('picture_url').invalid  &&     this.formulario.get('picture_url').touched;
    }
    get EmailInvalid():boolean {
        return this.formulario.get('email').invalid        &&     this.formulario.get('email').touched;
    }
}
