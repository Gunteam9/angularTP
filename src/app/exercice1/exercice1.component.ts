import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: []
})
export class Exercice1Component implements OnInit {
  isAuth = false;
  lastUpdate = new Promise<Date>((resolve, reject) => { const date = new Date(); setTimeout(() => resolve(date), 500); } );

  appareils = [
    {
      name: 'Machine à laver',
      isActive: false
    },
    {
      name: 'Frigo',
      isActive: true
    },
    {
      name: 'Ordinateur',
      isActive: false
    }
  ];

  constructor() {
    setTimeout(() => this.isAuth = true, 4000);
  }

  onAllumer(): void {
    console.log('Allumer');
  }

  ngOnInit(): void {
  }
}
