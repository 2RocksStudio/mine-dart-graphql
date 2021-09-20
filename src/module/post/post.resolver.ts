import { UseGuards } from '@nestjs/common';
import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PaginationInput } from '../../common/types/pagination.input';
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
  findAll(@Args('pagination', { nullable: true }) pagination: PaginationInput) {
    const { limit, page } = pagination || {};
    console.log(limit, page);
    return this.postService.findAllWithIsDeletedFalse({ limit, page });
  }

  @ResolveField('author', () => User)
  async getAuthor(@Parent() post: Post) {
    const { createdBy } = post;

    return this.usersService.findOne(createdBy);
  }
}
