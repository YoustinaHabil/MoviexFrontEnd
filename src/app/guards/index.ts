import { AuthGuardService } from './auth.guard';
import { CloseAuthGuardService } from './close-auth.guard';


export const GUARDS = [
  AuthGuardService,
  CloseAuthGuardService,
];

export * from './auth.guard';
export * from './close-auth.guard';
