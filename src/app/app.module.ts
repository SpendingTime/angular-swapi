import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { DataService } from './data-service';
import { PersonajeService } from './personajeService/personaje-service';

@NgModule({
  declarations: [
    AppComponent,
    PersonajeComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [DataService, PersonajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
