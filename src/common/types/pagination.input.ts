import { IsNumber, Min, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class PaginationInput {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Field(() => Int, { nullable: true })
  page: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Field(() => Int, { nullable: true })
  limit: number;
}
