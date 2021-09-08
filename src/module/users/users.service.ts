import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from '../../database/entities/user/user.entity';
import { UserRepository } from '../../database/repositories/user/user.repository';
import { UserScoreRepository } from '../../database/repositories/user/user.score.repository';
import { UserScore } from '../../database/entities/user/user.score.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(Logger) private readonly logger: LoggerService,
    private usersRepository: UserRepository,
    private userScoreRepository: UserScoreRepository,
  ) {}
  create(createUserInput: CreateUserInput): User {
    const dummy: User = plainToClass(User, {});
    return dummy;
  }

  async findAll(): Promise<User[]> {
    this.logger.log(`[${UsersService.name}] findAll()`);
    const users: User[] =
      await this.usersRepository.findAllWithIsDeletedFalse();
    return users;
  }

  findOne(id: number | string): User {
    this.logger.log(`[${UsersService.name}] findOne()`);
    const dummy: User = plainToClass(User, {
      username: '',
      password: '',
      email: '',
      fcmToken: '',
      status: '',
      regFrom: '',
    });

    return dummy;
  }

  update(id: number | string, updateUserInput: UpdateUserInput): User {
    this.logger.log(`[${UsersService.name}] update()`);
    const dummy: User = plainToClass(User, {
      username: '',
      password: '',
      email: '',
      fcmToken: '',
      status: '',
      regFrom: '',
    });

    return dummy;
  }

  remove(id: number | string): User {
    this.logger.log(`[${UsersService.name}] remove()`);
    const dummy: User = plainToClass(User, {
      username: '',
      password: '',
      email: '',
      fcmToken: '',
      status: '',
      regFrom: '',
    });

    return dummy;
  }

  findUserByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findUserByUsernameWithIsDeletedFalse(username);
  }

  findUserScoresById(
    userId: string | number,
  ): Promise<UserScore[] | undefined> {
    return this.userScoreRepository.findByUserIdWithIsDeletedFalse(userId);
  }
}
