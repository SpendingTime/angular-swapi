import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Personaje, PersonajeSpanish } from "./personajeService/personaje.model";

@Injectable()
export class DataService {

    urlBase = "https://swapi.py4e.com/api/people/"
    urlGet = "https://6ym590gbnf.execute-api.us-east-1.amazonaws.com/dev/get/";
    urlPost = "https://6ym590gbnf.execute-api.us-east-1.amazonaws.com/dev/post";

    constructor(private httpClient: HttpClient) { }

    cargarPersonajes(idText: number): Observable<Personaje> {
        return this.httpClient.get<Personaje>(this.urlBase + idText);
    }

    cargarPersonajesEs(idPersonaje: number): Observable<PersonajeSpanish> {
        return this.httpClient.get<PersonajeSpanish>(this.urlGet + idPersonaje);
    }

    almacenarPersonajes(personajeSpanish: PersonajeSpanish) {

        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this.httpClient.post<any>(this.urlPost, personajeSpanish, { headers });
    }
}