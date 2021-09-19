import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

import { BaseEntity } from '../base.entity';
import { User } from '../user/user.entity';

@ObjectType()
@Entity('post')
export class Post extends BaseEntity {
  @Column()
  @Field(() => String, { description: 'title' })
  title: string;

  @Column({ default: '' })
  @Field(() => String, { description: 'description' })
  description: string;

  @Column({ default: false, name: 'is_published' })
  @Field(() => Boolean, { description: 'isPublished' })
  isPublished: boolean;

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'created_by',
  })
  @Field(() => [User])
  author: User;

  //   @OneToMany(() => File, (file) => file.post, {
  //     cascade: true,
  //   })
  //   files: File[];

  //   @OneToMany(() => PostComment, (comment) => comment.postId, {
  //     cascade: true,
  //   })
  //   comments: PostComment[];
}
