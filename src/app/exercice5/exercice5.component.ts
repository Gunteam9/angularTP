import { Component, OnInit } from '@angular/core';
import {DataContainer} from './DataContainer';

@Component({
  selector: 'app-exercice5',
  templateUrl: './exercice5.component.html',
  styleUrls: ['./exercice5.component.css']
})
export class Exercice5Component implements OnInit {
  currentId: number = 0;

  data = DataContainer.getInstance().data;

  constructor() { }

  ngOnInit(): void {
  }
}
