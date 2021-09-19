import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class AppResponse {
  @Field(() => Int, { description: 'Response code' })
  code: number;

  @Field(() => String, { description: 'Response message' })
  message: string;

  @Field(() => String, { description: 'Response title' })
  title: string;
}
