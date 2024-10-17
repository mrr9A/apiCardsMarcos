import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  private apiURL= 'https://pokeapi.co/api/v2/'

  getPokemon(){ //ESTE ES LA API PARA MANDAR A LLAMAR A LOS TUTORES
    return this.http.get(`${this.apiURL}pokemon?limit=100000&offset=0`)
  }
}
