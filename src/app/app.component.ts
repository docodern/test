import { Component, OnInit } from '@angular/core';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'test';

  characters: any;
  page = 1;

  constructor (private service:CharacterService) {}

  ngOnInit(): void {
    this.service
    .getCharacters(this.page)
    .subscribe(response => {
      this.characters = Object.values(response)[1];
    });
  }

  onScroll(): void {
    this.service
    .getCharacters(++this.page)
    .subscribe(response => {
      this.characters.push(...Object.values(response)[1]);
    });
  }
}
