import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../../entities/user/user.entity';

@EntityRepository(User)
@Injectable()
export class UserRepository extends Repository<User> {
  constructor() {
    super();
  }
  async findUserByUserIdWithIsDeletedFalse(userId: string): Promise<User> {
    try {
      return await this.findOne({ where: { id: userId, isDeleted: false } });
    } catch (error) {
      throw error;
    }
  }
  async findUserByUsernameWithIsDeletedFalse(username: string): Promise<User> {
    try {
      return await this.findOne({
        where: { username: username, isDeleted: false },
      });
    } catch (error) {
      throw error;
    }
  }
  async findAllWithIsDeletedFalse(): Promise<User[]> {
    try {
      return await this.find();
    } catch (error) {
      throw error;
    }
  }
  async addRoleToUser(user: User): Promise<User> {
    try {
      return await this.save(user);
    } catch (error) {
      throw error;
    }
  }
}
