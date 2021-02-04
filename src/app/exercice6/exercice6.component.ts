import { Component, OnInit } from '@angular/core';
import {Individu, IndividuService} from '../services/individu.service';

@Component({
  selector: 'app-exercice6',
  templateUrl: './exercice6.component.html',
  styleUrls: ['./exercice6.component.css']
})
export class Exercice6Component implements OnInit {

  individus: Individu[] = [];

  constructor(private indiviuService: IndividuService) {
  }


  ngOnInit(): void {
    this.individus = this.indiviuService.individus;
  }

}
