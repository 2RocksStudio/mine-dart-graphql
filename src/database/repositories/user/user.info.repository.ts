import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { UserInfo } from '../../entities/user/user.info.entity';

@EntityRepository(UserInfo)
@Injectable()
export class UserInfoRepository extends Repository<UserInfo> {
  constructor() {
    super();
  }
}
