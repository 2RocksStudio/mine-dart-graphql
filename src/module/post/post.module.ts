import { Logger, Module } from '@nestjs/common';
import { RespositoryModule } from '../../database/repositories/repository.module';
import { AuthModule } from '../auth/auth.module';
import { UsersService } from '../users/users.service';
import { PostResolver } from './post.resolver';
import { PostService } from './post.service';

@Module({
  imports: [RespositoryModule, AuthModule],
  providers: [Logger, PostResolver, UsersService, PostService],
  exports: [PostService],
})
export class PostModule {}
