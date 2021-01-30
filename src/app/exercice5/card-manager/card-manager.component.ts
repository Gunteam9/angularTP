import {Component, Input, OnInit} from '@angular/core';
import {Exercice5Component} from '../exercice5.component';
import {DataContainer} from '../DataContainer';

@Component({
  selector: 'app-card-manager',
  templateUrl: './card-manager.component.html',
  styleUrls: ['./card-manager.component.css']
})
export class CardManagerComponent implements OnInit {

  @Input() id: number = 0;
  marque: string = '';
  modele: string = '';

  constructor() {  }

  ngOnChanges(): void {
    let item = DataContainer.getInstance().data[this.id];
    this.marque = item.marque;
    this.modele = item.modele;
  }

  ngOnInit(): void {
  }

}
