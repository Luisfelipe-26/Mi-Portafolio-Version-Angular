import { Component, OnInit } from '@angular/core';
import { Validators,FormGroup,FormBuilder, MaxLengthValidator, MinLengthValidator } from '@angular/forms';
import {  Contactom } from 'src/app/models/contactom';
import { Servicios } from 'src/app/services/servicios';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  form: FormGroup
  constructor(private formBuilder:FormBuilder, private Contactosv:Servicios) {
    this.form = this.formBuilder.group({
        Nombre:['',[Validators.required,Validators.minLength(3)]],
        Correo:['',[Validators.required,Validators.email]],
        Asunto:['',[Validators.required,Validators.min(3)]],
        Mensaje:['',[Validators.required,Validators.maxLength(500)]]
    })
   }

  ngOnInit(): void {  }
  
 Guardar(){
   console.log(this.form);

this.Contactosv.guardarmensaje(this).subscribe(data => {
  console.log("Mensaje Enviado.");

});
}
}

