export class Personaje {

    constructor(
        public name: string, public height: string, public mass: string, public hair_color: string, public skin_color: string,
        public eye_color: string, public birth_year: string, public gender: string, public homeworld: string, public films: string[],
        public species: string[], public vehicles: string[], public starships: string[], public created: Date, public edited: Date, public url: string
    ) { }
}

export class PersonajeSpanish {

    constructor(
        public id_personaje: number, public nombre: string, public altura: string, public peso: string, public color_cabello: string, public color_piel: string,
        public color_ojo: string, public fecha_nacimiento: string, public genero: string, public planeta_origen: string, public peliculas: string[],
        public especie: string[], public vehiculos: string[], public naves: string[], public creado: Date, public editado: Date, public url: string
    ) { }
}