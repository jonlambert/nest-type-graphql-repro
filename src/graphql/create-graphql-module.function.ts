import { GraphQLModule } from '@nestjs/graphql';
import { buildSchema } from 'type-graphql';

export const createGraphQLModule = async () => {
  return GraphQLModule.forRoot({
    // typePaths: ['./**/*.graphql'],
    autoSchemaFile: 'schema.gql',
    // debug: true,
    playground: true,
    context: ({ req }) => ({ req }),
    installSubscriptionHandlers: true,
  });
};
