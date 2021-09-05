import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UserLoginInput {
  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}
