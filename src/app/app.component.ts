import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'Mon projet';

  constructor(private authService: AuthService) {
  }

  switchAuth() {
    if (this.authService.isAuth)
      this.authService.isAuth = false;
    else
      this.authService.isAuth = true;
  }

  isAuth() {
    return this.authService.isAuth;
  }
}
