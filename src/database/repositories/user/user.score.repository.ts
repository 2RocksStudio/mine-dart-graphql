import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { UserScore } from '../../entities/user/user.score.entity';

@EntityRepository(UserScore)
@Injectable()
export class UserScoreRepository extends Repository<UserScore> {
  constructor() {
    super();
  }
  async findByUserIdWithIsDeletedFalse(
    userId: string | number,
  ): Promise<UserScore[]> {
    try {
      return await this.find({ where: { userId, isDeleted: false } });
    } catch (error) {
      throw error;
    }
  }
}
