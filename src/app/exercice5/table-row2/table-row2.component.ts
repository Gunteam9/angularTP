import {Component, Input, OnInit} from '@angular/core';
import {Exercice5Component} from '../exercice5.component';

@Component({
  selector: '[app-table-row2]',
  templateUrl: './table-row2.component.html',
  styleUrls: []
})
export class TableRow2Component implements OnInit {

  @Input() id: number = 0;
  @Input() marque: string = '';
  @Input() modele: string = '';

  @Input() parent: any;

  ngOnInit(): void {
  }

  details() {
    this.parent.currentId = this.id;
  }
}
