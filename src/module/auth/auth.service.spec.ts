// import { Logger } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { Test, TestingModule } from '@nestjs/testing';
// import { RespositoryModule } from '../../database/repositories/repository.module';
// import { UsersService } from '../users/users.service';
// import { AuthService } from './auth.service';
// import { JwtStrategy } from './jwt.strategy';
// import { LocalStrategy } from './local.strategy';

describe('AuthService', () => {
  // let service: AuthService;

  beforeEach(async () => {
    // const module: TestingModule = await Test.createTestingModule({
    //   imports: [
    //     RespositoryModule,
    //     // UsersModule,
    //     PassportModule.register({ defaultStrategy: 'jwt' }),
    //     JwtModule.register({
    //       secret: process.env.JWT_SECRET || 'always_learning',
    //       signOptions: {
    //         expiresIn: '30days',
    //       },
    //     }),
    //   ],
    //   providers: [
    //     Logger,
    //     AuthService,
    //     JwtStrategy,
    //     LocalStrategy,
    //     UsersService,
    //   ],
    //   exports: [AuthService],
    // }).compile();
    // service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    // expect(service).toBeDefined();
  });
});
