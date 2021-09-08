import { join } from 'path';

export class DBConfig {
  private readonly _config: any;
  constructor() {
    this._config = {
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [join(__dirname, '../database/entities/*/**.entity{.ts,.js}')],
      migrations: [join(__dirname, '../database/migrations', '*{.ts,.js}')],
      synchronize: process.env.TYPEORM_SYNCHRONIZE == 'true',
      migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN == 'true',
      logging: process.env.TYPEORM_LOGGING == 'true',
      conectTimeoutMS: process.env.DB_CONNECTION_TIMEOUT_MILLS,
      keepConnectionAlive: true,
    };
  }

  public get config(): any {
    return this._config;
  }
}
