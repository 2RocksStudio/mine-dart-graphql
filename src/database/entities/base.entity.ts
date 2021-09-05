import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@ObjectType()
export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: 'ID' })
  id: number;

  @Column({ default: false, name: 'is_deleted' })
  @Field(() => Boolean, { description: 'isDeleted' })
  isDeleted: boolean;

  @CreateDateColumn({ name: 'created_at' })
  @Field(() => String, { description: 'createdAt' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Field(() => String, { description: 'updatedAt' })
  updatedAt: Date;

  @VersionColumn()
  @Field(() => Int, { description: 'version' })
  version: number;

  @Column({ nullable: true, name: 'created_by', unique: false })
  @Field(() => Int, { description: 'createdBy' })
  createdBy: number;

  @Column({ nullable: true, name: 'updated_by', unique: false })
  @Field(() => Int, { description: 'updatedBy' })
  updatedBy: number;
}
