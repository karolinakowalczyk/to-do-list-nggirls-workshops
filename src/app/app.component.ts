import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{ title }} app is running!</h1>
    <app-input-button-unit></app-input-button-unit>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';
}
