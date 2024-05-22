export interface Guion {
    id:number;
    titulo:string;
    genero:string;
    usuarioId:string;
}



export interface Dialogo {
  personaje: string;
  texto: string;
}

export interface PosicionActor {
  actor: string;
  ubicacion: string;
  pose: string;
}

export interface Escena {
  numero: number;
  descripcion: string;
  dialogos: Dialogo[];
  posiciones_actores: PosicionActor[];
}

export interface GuionCompleto {
  titulo: string;
  genero: string;
  autorId: number;
  escenas: Escena[];
}

