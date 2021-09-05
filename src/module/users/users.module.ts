import { Logger, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { RespositoryModule } from '../../database/repositories/repository.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [RespositoryModule, AuthModule],
  providers: [Logger, UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
