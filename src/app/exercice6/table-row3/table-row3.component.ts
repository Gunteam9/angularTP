import {Component, Input, OnInit} from '@angular/core';
import {Individu} from '../../services/individu.service';

@Component({
  selector: '[app-table-row3]',
  templateUrl: './table-row3.component.html',
  styleUrls: ['./table-row3.component.css']
})
export class TableRow3Component implements OnInit {

  @Input() individu!: Individu;

  constructor() { }

  ngOnInit(): void {
  }

}
