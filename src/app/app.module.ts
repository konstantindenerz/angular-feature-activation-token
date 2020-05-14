import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule, Provider} from '@angular/core';

import {AppComponent} from './app.component';
import {FoobarModule} from './foobar/foobar.module';
import {RouterModule} from '@angular/router';
import {FoobarComponent} from './foobar/foobar.component';
import {MENU, MENU_ACTIONS} from './menuRegistrationDeregistration';
import {BaseModule} from './base-module.service';
import {MENU_REGISTRATION_PROVDIERS} from './menu.registation';


export const APP_MENUS: Provider[] = [
  MENU_REGISTRATION_PROVDIERS,
  {provide: MENU, multi: true, useValue: 'AppMenu'},
  {provide: MENU_ACTIONS, multi: true, useValue: 'AppAction'},
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FoobarModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo: 'foobar'},
      {
        path: 'foobar', component: FoobarComponent,
      },
      {
        path: 'lazy-bubu', loadChildren: () => import('./lazy-bubu/lazy-bubu.module').then(m => m.LazyBubuModule),
      },
    ], {useHash: true}),
  ],
  providers: [
    {provide: APP_INITIALIZER, multi: true, useFactory: () => () => console.log('init')},
    ...APP_MENUS,
  ],
  bootstrap: [AppComponent],
})
export class AppModule extends BaseModule {
}
