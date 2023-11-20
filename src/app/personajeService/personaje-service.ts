import { DataService } from "../data-service";
import { Injectable } from '@angular/core';
import { PersonajeSpanish } from "./personaje.model";

@Injectable()
export class PersonajeService {

    constructor(private dataservice: DataService){}

    obtenerPersonajes(idText: number) {
        return this.dataservice.cargarPersonajes(idText);
    }

    obtenerPersonajesEs(idPersonaje: number) {
        return this.dataservice.cargarPersonajesEs(idPersonaje);
    }

    guardarPersonajes(personajeSpanish: PersonajeSpanish) {
        return this.dataservice.almacenarPersonajes(personajeSpanish);
    }
}