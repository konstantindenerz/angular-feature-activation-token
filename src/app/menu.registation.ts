import {FEATURE_INITIALIZER} from './featureModuleActivation.token';
import {MenuRegistrationDeregistration} from './menuRegistrationDeregistration';

export const MENU_REGISTRATION_PROVDIERS = {
  provide: FEATURE_INITIALIZER, multi: true,
  useClass: MenuRegistrationDeregistration,
};
