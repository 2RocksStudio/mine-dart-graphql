import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../base.entity';
import { User } from './user.entity';

@ObjectType()
@Entity('user_info')
export class UserInfo extends BaseEntity {
  @Column({ nullable: true })
  @Field(() => String, { nullable: true, description: 'name' })
  name: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true, description: 'phone' })
  phone: string;

  @Column({ type: 'jsonb', array: false, nullable: true })
  @Field(() => String, { nullable: true, description: 'extra' })
  extra: JSON;

  @OneToOne(() => User, (user) => user.info)
  @JoinColumn({
    name: 'user_id',
  })
  user: User;
}
