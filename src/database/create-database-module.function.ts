import { TypeOrmModule } from '@nestjs/typeorm';

console.log([__dirname + '/../../dist/**/*.entity{.ts,.js}']);

export const createDatabaseModule = () => {
  return TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT
      ? parseInt(process.env.DATABASE_PORT)
      : 9071,
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_SECRET || 'secret',
    database: process.env.DATABASE_NAME || 'spire-edu',
    entities: [__dirname + '/../../dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    cache: {
      type: 'redis',
      options: {
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || 6379,
      },
    },
  });
};
