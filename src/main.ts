import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';
import { AppModule } from './app.module';

const winstonLogger = WinstonModule.createLogger({
  transports: [
    new winston.transports.File({
      filename: './logs/error.log',
      level: 'error',
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        nestWinstonModuleUtilities.format.nestLike(),
      ),
    }),
  ],
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: winstonLogger, //Logger Replace
  });
  const configService: ConfigService = app.get(ConfigService); //Get Config Service
  const logger: Logger = app.get(Logger);
  logger.log(
    `[Staring] App Name : ${configService.get<string>('app.pathPrefix')}`,
  );
  logger.log(
    `[Staring] Port Listen : ${configService.get<number>('app.appPort')}`,
  );
  await app.listen(configService.get<number>('app.appPort'));
}
bootstrap();
