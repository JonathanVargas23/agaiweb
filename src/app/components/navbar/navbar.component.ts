import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public lang = 'es';
  constructor (
    private _router: Router
  ) { }

  ngOnInit(): void {
    // console.log('init component');
  }

  goHome() {
    this._router.navigate(['/home']);
  };

  changeLang(langSelected) {
    this.lang = langSelected;
  };

  registerEvent() {
    console.log('Register event for analytics');
    // this._analytics.event('Click Botón Entrar', 'Click Botón Entrar', 'Click Botón Entrar');
  };
}
