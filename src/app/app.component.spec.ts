// import { TestBed, async } from '@angular/core/testing';
import { render, screen, fireEvent } from '@testing-library/angular';
import { AppComponent } from './app.component';

// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'angular-testing-library'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('angular-testing-library');
//   });

//   it('should render title in a h1 tag', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-testing-library!');
//   });
// });

describe('Testing Library', () => {
  test('should render counter', async () => {
    await render(AppComponent, {
      componentProperties: { counter: 5 },
    })

    expect(screen.getByText('Current Count: 5'));
  })

  test('should increment the counter on click', async () => {
    await render(AppComponent, {
      componentProperties: { counter: 5 },
    })

    fireEvent.click(screen.getByText('+'));

    expect(screen.getByText('Current Count: 6'));
  })
})
