import { API_URL } from './../../app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {Admin} from '../../administradores/admin.model';
import{map,catchError} from 'rxjs/operators'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdministradoresWebDataService {

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  getAllAdministradores(): Observable<Admin[]>{
    return this.http.get<Admin[]>(`${API_URL}/administradores`);
  }

  addAdministrador(admin):Observable<any>{
    return this.http.post<any>(`${API_URL}/administradores`, admin,{headers:this.httpHeaders})
    .pipe(
      catchError(e=>{
        console.error(e.error.mensaje)
        alert( `${e.error.mensaje} ${e.error.error}`);
        return throwError(e);}
    )
    )
  }
  getAdministrador(id): Observable<Admin>{
    return this.http.get<Admin>(`${API_URL}/administradores/${id}`).pipe(
      catchError(e=>{
        this.router.navigate(['/administradores']);
        
        alert( `${e.error.mensaje} ${e.error.error}`);
        return throwError(e);
      })
    );
  }

  deleteAdministrador(id): Observable<Admin>{
    return this.http.delete<Admin>(`${API_URL}/administradores/${id}`).pipe(
      catchError(e=>{
        
        
        alert( `${e.error.mensaje} ${e.error.error}`);
        return throwError(e);
      })
    );
  }
  updateAdministrador(id, admin):Observable<any>{
    return this.http.put(`${API_URL}/administradores/${id}`, admin).pipe(
      catchError(e=>{
        this.router.navigate(['/administradores']);
        
        alert( `${e.error.mensaje} ${e.error.error}`);
        return throwError(e);
      })
    );
  }

  

}
