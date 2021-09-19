import { UseGuards } from '@nestjs/common';
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Post } from '../../database/entities/post/post.entity';
import { User } from '../../database/entities/user/user.entity';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { UsersService } from '../users/users.service';
import { PostService } from './post.service';

@Resolver(() => Post)
export class PostResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly postService: PostService,
  ) {}

  @Query(() => [Post], { name: 'posts' })
  @UseGuards(GqlAuthGuard)
  findAll() {
    return this.postService.findAll();
  }

  @ResolveField('author', () => User)
  async getAuthor(@Parent() post: Post) {
    const { createdBy } = post;

    return this.usersService.findOne(createdBy);
  }
}
