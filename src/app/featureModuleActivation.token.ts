import {InjectionToken} from '@angular/core';

export const FEATURE_INITIALIZER = new InjectionToken<() => void>('to access function that should be invoked during feature module activation');
