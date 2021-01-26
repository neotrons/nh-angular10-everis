import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>{{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; color: red; }`]
})
export class HelloComponent {
  name = 'Hola mundo';
}
