import { Module } from '@nestjs/common';
import { createGraphQLModule } from './graphql/create-graphql-module.function';
import { InterestedUserModule } from './interested-user/interested-user.module';
import { createDatabaseModule } from './database/create-database-module.function';

@Module({
  imports: [createGraphQLModule(), createDatabaseModule(), InterestedUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
