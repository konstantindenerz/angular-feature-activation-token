import {Inject, Injectable} from '@angular/core';
import {FEATURE_INITIALIZER} from './featureModuleActivation.token';

@Injectable()
export abstract class BaseModule {
  constructor(@Inject(FEATURE_INITIALIZER) initializations) {
  }
}

