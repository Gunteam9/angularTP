import { Component, OnInit } from '@angular/core';
import {Individu, IndividuService} from '../services/individu.service';

@Component({
  selector: 'app-exercice6',
  templateUrl: './exercice6.component.html',
  styleUrls: ['./exercice6.component.css']
})
export class Exercice6Component implements OnInit {

  individus: Individu[] = [];

  constructor(private individuService: IndividuService) {
  }


  ngOnInit(): void {
    this.individus = this.individuService.individus;
  }

  getBackgroundColor(i: number): string {
    if (i%2 == 0)
      return "lightgreen";
    else
      return "lightsalmon";
  }
}
