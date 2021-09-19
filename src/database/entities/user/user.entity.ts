import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from '../base.entity';
import { UserInfo } from './user.info.entity';
import { UserScore } from './user.score.entity';
import { Post } from '../post/post.entity';

import { UserRegistrationFromEnum } from '../../../common/enum/user.registration.from.enum';

export enum UserStatus {
  activated = 'activated',
  unactivated = 'unactivated',
  pending = 'pending',
}

// export enum UserRegistrationFrom {
//   username = 'username',
//   apple = 'apple',
//   google = 'google',
//   facebook = 'facebook',
// }

@ObjectType()
@Entity('user')
export class User extends BaseEntity {
  @Column({ unique: true })
  @Field(() => String, { description: 'username' })
  username: string;

  @Column()
  password: string;

  @Column({ unique: true, nullable: true })
  @Field(() => String, { description: 'email', nullable: true })
  email: string;

  @Column({ nullable: true, name: 'fcm_token' })
  @Field(() => String, {
    nullable: true,
    description: 'FireBase Push Notiy Token',
  })
  fcmToken: string;

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.unactivated })
  @Field(() => String, {
    description: `UserStatus ${Object.keys(UserStatus).join(' | ')}`,
  })
  status: UserStatus;

  @Column({
    type: 'enum',
    enum: UserRegistrationFromEnum,
    default: UserRegistrationFromEnum.USERNAME,
    name: 'reg_from',
  })
  @Field(() => String, {
    description: `UserRegistrationFromEnum ${Object.keys(
      UserRegistrationFromEnum,
    ).join(' | ')}`,
  })
  regFrom: UserRegistrationFromEnum;

  emailToLowerCase() {
    this.email = this.email.toLowerCase();
  }

  @OneToOne(() => UserInfo, (userinfo) => userinfo.user, {
    cascade: true,
    eager: true,
  })
  @Field({ nullable: true })
  info: UserInfo;

  @OneToMany(() => UserScore, (userScore) => userScore.user, {
    cascade: true,
  })
  @Field(() => [UserScore])
  userScores: UserScore[];

  @OneToMany(() => Post, (post) => post.author, {
    cascade: true,
  })
  @Field(() => [Post])
  posts: Post[];
}
