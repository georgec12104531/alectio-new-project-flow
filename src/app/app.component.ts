import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private ngRedux: NgRedux<IAppState>) {}

  clearTodos() {
    this.ngRedux.dispatch({ type: '' });
  }
}