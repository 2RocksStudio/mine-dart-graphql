import { Column, Entity } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../base.entity';

@ObjectType()
@Entity('score')
export class Score extends BaseEntity {
  @Column()
  @Field(() => Int, { description: 'score' })
  score: number;

  @Column()
  @Field(() => String, { description: 'type' })
  type: string;

  @Column()
  @Field(() => String, { description: 'title' })
  title: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true, description: 'description' })
  description: string;

  @Column({ type: 'jsonb', array: false, nullable: true })
  @Field(() => String, { nullable: true, description: 'extra' })
  extra: JSON;
}
