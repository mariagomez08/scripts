import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuionCompleto } from '../services/auth/user';



@Component({
  selector: 'app-edit-script',
  templateUrl: './edit-script.component.html',
  styleUrls: ['./edit-script.component.css']
})

export class EditScriptComponent  implements OnInit {
  guionForm: FormGroup;

  // Guion predefinido
  // guionPredefinido:Guion = {
  //   titulo: 'Mi Nuevo Guion',
  //   genero: 'Comedia',
  //   autorId: 1,
  //   escenas: [
  //     {
  //       numero: 1,
  //       descripcion: 'Descripción de la escena 1',
  //       dialogos: [
  //         { personaje: 'Personaje 1', texto: 'Diálogo 1' },
  //         { personaje: 'Personaje 2', texto: 'Diálogo 2' },
  //       ],
  //       posiciones_actores: [
  //         { actor: 'Actor 1', ubicacion: 'Ubicación 1', pose: 'Pose 1' },
  //         { actor: 'Actor 2', ubicacion: 'Ubicación 2', pose: 'Pose 2' },
  //       ],
  //     },
  //     {
  //       numero: 2,
  //       descripcion: 'Descripción de la escena 2',
  //       dialogos: [
  //         { personaje: 'Personaje 3', texto: 'Diálogo 3' },
  //         { personaje: 'Personaje 4', texto: 'Diálogo 4' },
  //       ],
  //       posiciones_actores: [
  //         { actor: 'Actor 3', ubicacion: 'Ubicación 3', pose: 'Pose 3' },
  //         { actor: 'Actor 4', ubicacion: 'Ubicación 4', pose: 'Pose 4' },
  //       ],
  //     },
  //   ],
  // };

  constructor(private fb: FormBuilder) {
    this.guionForm = this.fb.group({
      titulo: ['', Validators.required],
      genero: ['', Validators.required],
      autorId: ['', Validators.required],
      escenas: this.fb.array([]),
    });
  }

  ngOnInit() {

  }

  setGuionForm(guion: GuionCompleto) {
    this.guionForm.patchValue({
      titulo: guion.titulo,
      genero: guion.genero,
      autorId: guion.autorId,
    });

    guion.escenas.forEach((escena) => {
      const escenaFormGroup = this.fb.group({
        numero: escena.numero,
        descripcion: escena.descripcion,
      });
      escenaFormGroup.patchValue({
        numero: escena.numero,
        descripcion: escena.descripcion,
      });

      escena.dialogos.forEach((dialogo) => {
        const dialogoFormGroup = this.newDialogo();
  dialogoFormGroup.patchValue(dialogo);
  const dialogosArray = this.getDialogos(this.escenas?.length - 1);
  if (dialogosArray) {
    dialogosArray.push(dialogoFormGroup);
  }
      });

      escena.posiciones_actores.forEach((posicion) => {
        const posicionFormGroup = this.newPosicionActor();
        posicionFormGroup.patchValue(posicion);
        const posicionesActoresArray = this.getPosicionesActores(this.escenas?.length - 1);
        if (posicionesActoresArray) {
          posicionesActoresArray.push(posicionFormGroup);
        }
      });
      this.escenas.push(escenaFormGroup);
    });
  }

  get escenas(): FormArray {
    return this.guionForm.get('escenas') as FormArray;
  }

  newEscena(): FormGroup {
    return this.fb.group({
      numero: ['', Validators.required],
      descripcion: ['', Validators.required],
      dialogos: this.fb.array([]),
      posiciones_actores: this.fb.array([]),
    });
  }

  addEscena() {
    this.escenas.push(this.newEscena());
  }

  removeEscena(index: number) {
    this.escenas.removeAt(index);
  }

  getDialogos(escenaIndex: number): FormArray {
   if (this.escenas) {
    const escena = this.escenas.at(escenaIndex);
    if (escena) {
      return escena.get('dialogos') as FormArray;
    }
  }
  return this.fb.array([]);
  }

  newDialogo(): FormGroup {
    return this.fb.group({
      personaje: ['', Validators.required],
      texto: ['', Validators.required],
    });
  }

  addDialogo(escenaIndex: number) {
    this.getDialogos(escenaIndex).push(this.newDialogo());
  }

  removeDialogo(escenaIndex: number, dialogoIndex: number) {
    this.getDialogos(escenaIndex).removeAt(dialogoIndex);
  }

  getPosicionesActores(escenaIndex: number): FormArray {
    if (this.escenas) {
      const escena = this.escenas.at(escenaIndex);
      if (escena) {
        return escena.get('posiciones_actores') as FormArray;
      }
    }
    return this.fb.array([]);
  }

  newPosicionActor(): FormGroup {
    return this.fb.group({
      actor: ['', Validators.required],
      ubicacion: ['', Validators.required],
      pose: ['', Validators.required],
    });
  }

  addPosicionActor(escenaIndex: number) {
    this.getPosicionesActores(escenaIndex).push(this.newPosicionActor());
  }

  removePosicionActor(escenaIndex: number, posicionIndex: number) {
    this.getPosicionesActores(escenaIndex).removeAt(posicionIndex);
  }

  onSubmit() {
    console.log(this.guionForm.value);
    // Aquí puedes llamar a tu servicio para enviar los datos al backend
  }
}
