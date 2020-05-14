import {NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyBubuComponent} from './lazy-bubu.component';
import {RouterModule} from '@angular/router';
import {BaseModule} from '../base-module.service';
import {FEATURE_INITIALIZER} from '../featureModuleActivation.token';
import {MENU, MENU_ACTIONS} from '../menuRegistrationDeregistration';
import {MENU_REGISTRATION_PROVDIERS} from '../menu.registation';


export const FEATURE_MENUS: Provider[] = [
  {provide: MENU, multi: true, useValue: 'Lazy Menu 1'},
  {provide: MENU, multi: true, useValue: 'Lazy Menu 1'},
  {provide: MENU_ACTIONS, multi: true, useValue: 'LazyAction'},
  MENU_REGISTRATION_PROVDIERS,
];

@NgModule({
  declarations: [LazyBubuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: LazyBubuComponent}]),
  ],
  providers: [
    {provide: FEATURE_INITIALIZER, multi: true, useFactory: () => console.log('init lazy bubu2')},
    {provide: FEATURE_INITIALIZER, multi: true, useFactory: () => console.log('init lazy bubu')},
    ...FEATURE_MENUS,
  ],
})
export class LazyBubuModule extends BaseModule {
}
