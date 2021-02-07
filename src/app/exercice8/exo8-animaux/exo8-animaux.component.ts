import {Component, Input, OnInit} from '@angular/core';
import {AnimauxService, CategorieAnimal} from '../../services/animaux.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: '[app-exo8-animaux]',
  templateUrl: './exo8-animaux.component.html',
  styleUrls: ['./exo8-animaux.component.css']
})
export class Exo8AnimauxComponent implements OnInit {

  id: number = 0;
  categorie!: CategorieAnimal;

  constructor(private route: ActivatedRoute, private animauxService: AnimauxService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categorie = this.animauxService.getCategorie(this.id);
  }

}
