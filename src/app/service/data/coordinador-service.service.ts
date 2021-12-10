import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';
import { Coordinador } from 'src/app/coordinador-perfil/coordinador.model';

@Injectable({
  providedIn: 'root'
})
export class CoordinadorServiceService {

  constructor(  private http: HttpClient,
    private router: Router) { }


  
  getAllCoordinadores(): Observable<Coordinador[]>{
    return this.http.get<Coordinador[]>(`${API_URL}/Coordinadores`);
  }

  addCoordinador(admin):Observable<any>{
    return this.http.post<any>(`${API_URL}/Coordinadores`, admin)
    .pipe(
      catchError(e=>{
        console.error(e.error.mensaje)
        alert( `${e.error.mensaje} ${e.error.error}`);
        return throwError(e);}
    )
    )
  }
  getCoordinador(id): Observable<Coordinador>{
    return this.http.get<Coordinador>(`${API_URL}/Coordinadores/${id}`).pipe(
      catchError(e=>{
        this.router.navigate(['/coordinadores']);
        
        alert( `${e.error.mensaje} ${e.error.error}`);
        return throwError(e);
      })
    );
  }

  deleteCoordinador(id): Observable<Coordinador>{
    return this.http.delete<Coordinador>(`${API_URL}/Coordinadores/${id}`).pipe(
      catchError(e=>{
        
        
        alert( `${e.error.mensaje} ${e.error.error}`);
        return throwError(e);
      })
    );
  }
  updateCoordinador(id, admin):Observable<any>{
    return this.http.put(`${API_URL}/Coordinadores/${id}`, admin).pipe(
      catchError(e=>{
        this.router.navigate(['/coordinadores']);
        
        alert( `${e.error.mensaje} ${e.error.error}`);
        return throwError(e);
      })
    );
  }

  
}
