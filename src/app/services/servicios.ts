import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Contactom } from "../models/contactom";
import { ContactoComponent } from "../components/contacto/contacto.component";

@Injectable({ providedIn: 'root' })

export class Servicios {
    myAppurl='https://localhost:44322/';
    myapi ='api/Clientes/';
    
constructor(private http:HttpClient){}

guardarmensaje(Contactom:ContactoComponent):Observable<Contactom>{
   return this.http.post<Contactom>(this.myAppurl + this.myapi,Contactom.form);
}
}
