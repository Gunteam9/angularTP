import {Component, Injectable, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: []
})

export class Exercice1Component implements OnInit {
  lastUpdate = new Promise<Date>((resolve, reject) => { const date = new Date(); setTimeout(() => resolve(date), 500); } );

  appareils: any[] = [];
  isAuth: boolean = this.authService.isAuth;

  constructor(private appareilService: AppareilService, private authService: AuthService) {
    setTimeout(() => this.authService.isAuth = true, 1000);
  }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer(): void {
    console.log('Allumer');
  }

  switchOnAll() {
    for (let appareil of this.appareils)
      appareil.isActive = true;
  }

  switchOffAll() {
    for (let appareil of this.appareils)
      appareil.isActive = false;
  }
}
