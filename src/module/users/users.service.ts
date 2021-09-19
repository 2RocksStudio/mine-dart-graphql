import {
  HttpException,
  Inject,
  Injectable,
  Logger,
  LoggerService,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from '../../database/entities/user/user.entity';
import { UserRepository } from '../../database/repositories/user/user.repository';
import { UserScoreRepository } from '../../database/repositories/user/user.score.repository';
import { UserScore } from '../../database/entities/user/user.score.entity';
import { ResponceCode } from '../../common/response/response.code';

@Injectable()
export class UsersService {
  constructor(
    @Inject(Logger) private readonly logger: LoggerService,
    private usersRepository: UserRepository,
    private userScoreRepository: UserScoreRepository,
  ) {}
  async create(createUserInput: CreateUserInput): Promise<User> {
    const newUser: User = new User();
    newUser.username = createUserInput.username;
    newUser.password = createUserInput.password;
    newUser.regFrom = createUserInput.regFrom;
    const checkExist: User =
      await this.usersRepository.findUserByUsernameWithIsDeletedFalse(
        createUserInput.username,
      );
    if (checkExist) {
      this.logger.log(`[${UsersService.name}] create() username already exist`);
      throw new HttpException(
        ResponceCode.STATUS_2001_USER_USERNAME_ALREADY_EXIST.message,
        ResponceCode.STATUS_2001_USER_USERNAME_ALREADY_EXIST.code,
      );
    }
    const user: User = await this.usersRepository.createUser(newUser);

    return user;
  }

  async findAll(): Promise<User[]> {
    this.logger.log(`[${UsersService.name}] findAll()`);
    const users: User[] =
      await this.usersRepository.findAllWithIsDeletedFalse();
    return users;
  }

  async findOne(id: number | string): Promise<User> {
    this.logger.log(`[${UsersService.name}] findOne()`);
    const user: User =
      await this.usersRepository.findUserByUserIdWithIsDeletedFalse(id);

    return user;
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
