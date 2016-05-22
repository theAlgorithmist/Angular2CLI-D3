import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { A2d3BarAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(A2d3BarAppComponent);

