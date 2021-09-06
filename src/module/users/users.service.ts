import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from '../../database/entities/user/user.entity';
import { UserRepository } from '../../database/repositories/user/user.repository';

@Injectable()
export class UsersService {
  constructor(
    @Inject(Logger) private readonly logger: LoggerService,
    private usersRepository: UserRepository,
  ) {}
  create(createUserInput: CreateUserInput): User {
    const dummy: User = plainToClass(User, {});
    return dummy;
  }

  async findAll(): Promise<User[]> {
    this.logger.log(`[${UsersService.name}] findAll()`);
    const users: User[] = await this.usersRepository.find();
    return users;
  }

  findOne(id: number): User {
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

  update(id: number, updateUserInput: UpdateUserInput): User {
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

  remove(id: number): User {
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
}
