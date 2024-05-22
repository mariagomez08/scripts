import { Component, OnInit } from '@angular/core';
import { GuionCompleto } from '../services/auth/user';
import { UserService } from '../services/user/user.service';
import { ActivatedRoute } from '@angular/router';



interface Dialogo {
  personaje: string;
  texto: string;
}

interface PosicionActor {
  actor: string;
  ubicacion: string;
  pose: string;
}

interface Escena {
  numero: number;
  descripcion: string;
  dialogos: Dialogo[];
  posiciones_actores: PosicionActor[];
}

interface Guion {
  titulo: string;
  genero: string;
  autorId: number;
  escenas: Escena[];
}



@Component({
  selector: 'app-view-script',
  templateUrl: './view-script.component.html',
  styleUrls: ['./view-script.component.css']
})
export class ViewScriptComponent implements OnInit {



  guionCompleto?:GuionCompleto;
  router: any;

constructor(private guionService: UserService, private route: ActivatedRoute) { }

    ngOnInit(): void {
      const idGuion: string | null = this.route.snapshot.paramMap.get('id');

      if (idGuion) {
        this.guionService.getGuion(idGuion).subscribe({
          next: (userData: any) => {
            this.guionCompleto = userData;
          },
          error: (err: any) => {
            console.error('Error fetching guion data:', err);
          }
        });
      } else {
        console.error('idGuion is null');
      }
    }
}



