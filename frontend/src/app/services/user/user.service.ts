import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Guion } from '../auth/user';
import { environment } from 'src/environments/environment';
import { GuionCompleto } from '../auth/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser():Observable<Guion[]>{
    return  this.http.get<Guion[]>(environment.urlHost+"guion/listar");
  }

  getGuion(id:string):Observable<GuionCompleto>{
    return  this.http.get<GuionCompleto>(environment.urlHost+"guion/obtener/"+id);
  }


  eliminarGuion(id:number): Observable<void>{
    return this.http.delete<void>(`${environment.urlHost}guion/eliminar/${id}`);
  }

  // updateUser(userRequest:User):Observable<any>
  // {
  //   return this.http.put(environment.urlApi+"user", userRequest).pipe(
  //     catchError(this.handleError)
  //   )
  // }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producio un error ', error.error);
    }
    else{
      console.error('Backend retornó el código de estado ', error.status, error.error);
    }
    return throwError(()=> new Error('Algo falló. Por favor intente nuevamente.'));
  }
}
