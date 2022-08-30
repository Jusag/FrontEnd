import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  //eduURL = 'https://backendtest900.herokuapp.com/proyecto/';
  eduURL = 'http://localhost:8080/proyecto/';
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.eduURL + 'lista');
  }
  
  public detail(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.eduURL + `detail/${id}`);
  }

  public save(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.eduURL + 'create', proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.eduURL + `update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
  }
}
