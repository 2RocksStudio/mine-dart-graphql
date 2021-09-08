import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user/user.repository';
import { UserScoreRepository } from './user/user.score.repository';
import { UserInfoRepository } from './user/user.info.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepository,
      UserInfoRepository,
      UserScoreRepository,
    ]),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class RespositoryModule {}
