import { Logger, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [Logger, UsersResolver, UsersService],
})
export class UsersModule {}
