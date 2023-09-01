import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  router: any;

  constructor() { }

  goToregister(): void {
    this.router.navigate(['/register'])
  }


}
