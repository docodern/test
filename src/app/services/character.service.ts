import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient: HttpClient) { }

  getCharacters(page: number) {
    return this.httpClient.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
  }
}
