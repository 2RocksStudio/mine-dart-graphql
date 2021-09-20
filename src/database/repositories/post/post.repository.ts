import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Post } from '../../entities/post/post.entity';

@EntityRepository(Post)
@Injectable()
export class PostRepository extends Repository<Post> {
  constructor() {
    super();
  }
  async findAllWithIsDeletedFalse({ limit, page }): Promise<Post[]> {
    try {
      return await this.find();
    } catch (error) {
      throw error;
    }
  }
}
