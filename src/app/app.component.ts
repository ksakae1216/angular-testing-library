import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="decrement()">-</button>
    <span data-testid="count">Current Count: {{ counter }}</span>
    <button (click)="increment()">+</button>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-testing-library';

  @Input() counter = 0

  increment() {
    this.counter += 1
  }

  decrement() {
    this.counter -= 1
  }
}
