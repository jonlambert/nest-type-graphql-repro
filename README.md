# Nest / TypeORM / TypeGraphQL

Repo demonstrating issues with custom TS paths and TypeORM / TypeGraphQL.

## To run:

```bash
npm install && npm run start:dev
```

See output: 
```
[Nest] 80623   - 09/05/2019, 13:54   [ExceptionHandler] No repository for "InterestedUser" was found. Looks like this entity is not registered in current "default" connection? +32ms
RepositoryNotFoundError: No repository for "InterestedUser" was found. Looks like this entity is not registered in current "default" connection?
    at new RepositoryNotFoundError (/type-graphql-repro/src/error/RepositoryNotFoundError.ts:10:9)
    at EntityManager.getRepository (/type-graphql-repro/src/entity-manager/EntityManager.ts:1008:19)
    at Connection.getRepository (/type-graphql-repro/src/connection/Connection.ts:342:29)
    at getRepository (/type-graphql-repro/node_modules/@nestjs/typeorm/dist/typeorm.providers.js:13:26)
    at InstanceWrapper.useFactory [as metatype] (/type-graphql-repro/node_modules/@nestjs/typeorm/dist/typeorm.providers.js:22:20)
    at Injector.instantiateClass (/type-graphql-repro/node_modules/@nestjs/core/injector/injector.js:279:55)
    at callback (/type-graphql-repro/node_modules/@nestjs/core/injector/injector.js:74:41)
    at processTicksAndRejections (internal/process/task_queues.js:85:5)
    at Injector.resolveConstructorParams (/type-graphql-repro/node_modules/@nestjs/core/injector/injector.js:113:24)
    at Injector.loadInstance (/type-graphql-repro/node_modules/@nestjs/core/injector/injector.js:78:9)

```