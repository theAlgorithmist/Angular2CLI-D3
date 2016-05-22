import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { A2d3BarAppComponent } from '../app/a2d3-bar.component';

beforeEachProviders(() => [A2d3BarAppComponent]);

describe('App: A2d3Bar', () => {
  it('should create the app',
      inject([A2d3BarAppComponent], (app: A2d3BarAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
