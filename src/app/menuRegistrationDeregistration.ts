import {MenuDefinitionRespository} from './foo.service';
import {Inject, Injectable, InjectionToken, OnDestroy, Optional} from '@angular/core';

export const MENU = new InjectionToken('');
export const MENU_ACTIONS = new InjectionToken('');

@Injectable()
export class MenuRegistrationDeregistration implements OnDestroy {
  constructor(respository: MenuDefinitionRespository,
              @Optional() @Inject(MENU) menuDefinitions: any[],
              @Optional() @Inject(MENU_ACTIONS) actionHandlers: any[]) {
    respository.definitions.push(...menuDefinitions);
  }

  ngOnDestroy(): void {
    // TODO: remove from repository
  }
}
