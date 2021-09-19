import { registerEnumType } from '@nestjs/graphql';

export enum UserRegistrationFromEnum {
  USERNAME = 'username',
  APPLE = 'apple',
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
}

registerEnumType(UserRegistrationFromEnum, {
  name: 'UserRegistrationFromEnum',
});
