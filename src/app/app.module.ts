import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import {HttpClientModule} from "@angular/common/http"
import { ContactoComponent } from './components/contacto/contacto.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';



const routes: Routes = [
  { path: '', component:CuerpoComponent }
, { path: 'Contacto', component: ContactoComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SobreComponent,
    ServiciosComponent,
    ProyectosComponent,
    ContactoComponent,
    CuerpoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
