import { Logger, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { RespositoryModule } from '../../database/repositories/repository.module';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    RespositoryModule,
    // UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'always_learning',
      signOptions: {
        expiresIn: '30days',
      },
    }),
  ],
  providers: [Logger, AuthService, JwtStrategy, LocalStrategy, UsersService],
  exports: [AuthService],
})
export class AuthModule {}
