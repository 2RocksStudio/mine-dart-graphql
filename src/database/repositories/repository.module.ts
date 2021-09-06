import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user/user.repository';
import { UserInfoRepository } from './user/userInfo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, UserInfoRepository])],
  providers: [],
  exports: [TypeOrmModule],
})
export class RespositoryModule {}
