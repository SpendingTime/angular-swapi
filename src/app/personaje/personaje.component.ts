import { Component } from '@angular/core';

import { PersonajeService } from '../personajeService/personaje-service';
import { Personaje, PersonajeSpanish } from '../personajeService/personaje.model';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: []
})
export class PersonajeComponent {

  personaje?: Personaje;
  personajeSpanish?: PersonajeSpanish;

  constructor(
    private personajeService: PersonajeService) { }

  valorIngresado: number = 0;
  valorIngresadoEs: number = 0;
  jsonResponse: any;
  jsonResponseEs: any;

  onMostrarPersonaje() {
    this.personajeService.obtenerPersonajes(this.valorIngresado).subscribe({
      next: (response) => {
        this.jsonResponse = response;
        this.personaje = response;
        console.log(this.personaje.name);

      },
      error: (error) => {
        this.jsonResponse = "NOT FOUND";
        console.error('Error al obtener datos', error);
      }
    });
  }

  onGuardarPersonaje() {
    if (this.personaje) {
      const personajeAGuardar = new PersonajeSpanish(
        this.valorIngresado, this.personaje.name, this.personaje.height, this.personaje.mass, this.personaje.hair_color, this.personaje.skin_color, this.personaje.eye_color,
        this.personaje.birth_year, this.personaje.gender, this.personaje.homeworld, this.personaje.films, this.personaje.species, this.personaje.vehicles,
        this.personaje.starships, this.personaje.created, this.personaje.edited, this.personaje.url
      );

      this.personajeService.guardarPersonajes(personajeAGuardar)
        .subscribe(
          (response) => {
            console.log('Respuesta del servidor:', response);
          },
          (error) => {
            console.error('Error en la solicitud:', error);
          }
        );
    }
  }

  onMostrarPersonajeEs(){
    this.personajeService.obtenerPersonajesEs(this.valorIngresadoEs).subscribe({
      next: (response) => {
        this.jsonResponseEs = response;
      },
      error: (error) => {
        this.jsonResponseEs = error;
        console.error('Error al obtener datos', error);
      }
    });
  }
}