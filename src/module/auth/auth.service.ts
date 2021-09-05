import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../database/entities/user/user.entity';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { LoginResponse } from '../users/dto/login-response';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  private hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async validate(username: string, password: string): Promise<User | null> {
    const user = await this.usersService.findUserByUsername(username);
    const hash_password = await bcrypt.compare(password, user?.password);
    if (user && hash_password) {
      return user;
    }
    return null;
  }

  login(user: any): LoginResponse {
    const payload = {
      type: 'ACCESS_TOKEN',
      username: user.username,
      sub: user.id,
    };
    const response = new LoginResponse();
    response.accessToken = this.jwtService.sign(payload);
    return response;
  }

  async verify(token: string): Promise<User> {
    const decoed = this.jwtService.verify(token, {
      secret: this.configService.get<string>('jwt.secret'),
    });

    const user: User = await this.usersService.findUserByUsername(
      decoed.username,
    );
    if (!user) {
      throw new Error('Verify error');
    }
    return user;
  }
}
