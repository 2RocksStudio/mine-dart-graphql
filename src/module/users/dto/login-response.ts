import { ObjectType, Int, Field } from '@nestjs/graphql';

@ObjectType()
export class LoginResponse {
  @Field(() => String, { description: 'Access Token' })
  accessToken: string;
}
