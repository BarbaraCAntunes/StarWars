import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_PATH } from '../environments/environments'
import { PersonagemClass } from './components/harry-potter/PersonagemClass';

@Injectable({
  providedIn: 'root'
})
export class PersonagemServiceService {
// private url = "http://localhost:3000/personagens"
  
constructor(private _http: HttpClient) { }

public getPersonagens(): Observable<PersonagemClass[]>{
  return this._http.get<PersonagemClass[]>(`${API_PATH}`)
}
}