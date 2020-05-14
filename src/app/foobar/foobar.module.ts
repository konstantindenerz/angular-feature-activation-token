import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FoobarComponent} from './foobar.component';


@NgModule({
  declarations: [FoobarComponent],
  imports: [
    CommonModule,
  ],
  providers: [
    {provide: APP_INITIALIZER, multi: true, useFactory: () => () => console.log('init foobar')},
  ],
  exports: [FoobarComponent]
})
export class FoobarModule {
}
