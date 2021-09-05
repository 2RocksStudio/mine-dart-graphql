import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@Inject(Logger) private readonly logger: LoggerService) {}
  create(createUserInput: CreateUserInput): User {
    return { exampleField: createUserInput.exampleField };
  }

  findAll(): [User] {
    this.logger.log(`[${UsersService.name}] findAll()`, [{ exampleField: 1 }]);
    return [{ exampleField: 1 }];
  }

  findOne(id: number): User {
    this.logger.log(`[${UsersService.name}] findOne()`);
    return { exampleField: id };
  }

  update(id: number, updateUserInput: UpdateUserInput): User {
    this.logger.log(`[${UsersService.name}] update()`);
    return { exampleField: updateUserInput.id };
  }

  remove(id: number): User {
    this.logger.log(`[${UsersService.name}] remove()`);
    return { exampleField: id };
  }
}
