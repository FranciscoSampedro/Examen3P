import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from 'src/model/persona';
@Injectable({
  providedIn: 'root'
})
export class SubcategoriaService {
  baseUrl:string = "http://localhost:3000/subcategorias";

  constructor(private http:HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get(this.baseUrl + "/1");
  }

  save(persona: Persona): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.baseUrl +"/save", JSON.stringify(persona), {headers: headers});
  }

  delete(id: number) : Observable<any>{
    return this.http.get(this.baseUrl + "/delete/"+id);
  }
}
