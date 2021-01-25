import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[app-table-row1]',
  templateUrl: './table-row1.component.html',
  styleUrls: []
})
export class TableRow1Component implements OnInit {

  @Input() id: number = 0;
  @Input() nom: string = '';
  @Input() mail: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
