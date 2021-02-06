import { Component, OnInit } from '@angular/core';
import {OtherService} from '../services/other.service';

@Component({
  selector: 'app-exercice7',
  templateUrl: './exercice7.component.html',
  styleUrls: ['./exercice7.component.css']
})
export class Exercice7Component implements OnInit {

  elements: string[] = [];

  constructor(private otherService: OtherService) { }

  ngOnInit(): void {
    this.elements = this.otherService.exercice7Data;
  }

  onAddItem(): void {
    this.otherService.addItemExo7();
  }
}
