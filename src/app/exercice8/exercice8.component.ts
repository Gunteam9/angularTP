import { Component, OnInit } from '@angular/core';
import {AnimauxService, CategorieAnimal} from '../services/animaux.service';

@Component({
  selector: 'app-exercice8',
  templateUrl: './exercice8.component.html',
  styleUrls: ['./exercice8.component.css']
})
export class Exercice8Component implements OnInit {

  elements: CategorieAnimal[] = [];

  constructor(private animauxService: AnimauxService) { }

  ngOnInit(): void {
    this.elements = this.animauxService.categories;
  }

  onOpenCategorie(item: CategorieAnimal) {
  }
}
