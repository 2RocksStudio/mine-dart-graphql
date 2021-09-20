import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { Post } from '../../database/entities/post/post.entity';
import { PostRepository } from '../../database/repositories/post/post.repository';

@Injectable()
export class PostService {
  constructor(
    @Inject(Logger) private readonly logger: LoggerService,
    private readonly postRepository: PostRepository,
  ) {}
  async findAllWithIsDeletedFalse({ limit, page }): Promise<Post[]> {
    this.logger.log(`[${PostService.name}] findAll()`);
    const posts: Post[] = await this.postRepository.findAllWithIsDeletedFalse({
      limit,
      page,
    });
    return posts;
  }
}
