import { SetMetadata } from '@nestjs/common';
import { AuthType } from '../enums/auth-type.enum';

export const AUTH_TYPE_KEY = 'authType';

export function Auth(...authTypes: AuthType[]) {
  return SetMetadata(AUTH_TYPE_KEY, authTypes);
}
// This decorator is used to set the authentication type for a route or controller.
// It uses the SetMetadata function from NestJS to attach the authentication type metadata.
