import { Component } from '@angular/core';
import {FooService} from './foo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'foo';
  constructor(public fooService: FooService) {
  }
}
