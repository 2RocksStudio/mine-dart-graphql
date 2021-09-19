import { InputType, Field } from '@nestjs/graphql';
import { IsEnum } from 'class-validator';
import { UserRegistrationFromEnum } from '../../../common/enum/user.registration.from.enum';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'username' })
  username: string;

  @Field(() => String, { description: 'password' })
  password: string;

  // @Field(() => String, { description: 'email' })
  // @IsEmail()
  // email: string;

  @Field(() => UserRegistrationFromEnum, {
    description: `UserRegistrationFromEnum ${Object.keys(
      UserRegistrationFromEnum,
    ).join(' | ')}`,
  })
  @IsEnum(UserRegistrationFromEnum)
  regFrom: UserRegistrationFromEnum;
}
