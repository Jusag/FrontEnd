import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hardsoft } from '../model/hardsoft';

@Injectable({
  providedIn: 'root'
})
export class HardsoftService {
  eduURL = 'https://backendporfoliojsgfinal.herokuapp.com/hardsoft/';
  //eduURL = 'http://localhost:8080/hardsoft/';

  constructor(private httpClient: HttpClient) { }
  
  
  
  public lista(): Observable<Hardsoft[]> {
    return this.httpClient.get<Hardsoft[]>(this.eduURL + 'lista');
  }
  
  public detail(id: number): Observable<Hardsoft> {
    return this.httpClient.get<Hardsoft>(this.eduURL + `detail/${id}`);
  }

  public save(hardSoft: Hardsoft): Observable<any> {
    return this.httpClient.post<any>(this.eduURL + 'create', hardSoft);
  }

  public update(id: number, hardSoft: Hardsoft): Observable<any> {
    return this.httpClient.put<any>(this.eduURL + `update/${id}`, hardSoft);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
  }

}
