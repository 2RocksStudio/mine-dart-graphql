import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../base.entity';
import { User } from './user.entity';
import { Score } from '../score/score.entity';

@ObjectType()
@Entity('user_score')
export class UserScore extends BaseEntity {
  @Column({ name: 'user_id' })
  @Field(() => Int, { description: 'userId' })
  userId: number;

  @Column({ name: 'score_id' })
  @Field(() => Int, { description: 'scoreId' })
  scoreId: number;

  @Column({ type: 'jsonb', array: false, nullable: true })
  extra: JSON;

  @ManyToOne(() => User, (user) => user.userScores)
  @JoinColumn({
    name: 'user_id',
  })
  user: User;

  @ManyToOne(() => Score, (score) => score.id, { eager: true })
  @JoinColumn({
    name: 'score_id',
  })
  @Field()
  score: Score;
}
