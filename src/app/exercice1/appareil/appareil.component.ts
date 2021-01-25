import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input()
  appareilName!: string;
  @Input()
  isActive: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.isActive ? 'Allumé' : 'Eteint';
  }

  getColor(): string {
    return this.isActive ? 'green' : 'red';
  }
}
