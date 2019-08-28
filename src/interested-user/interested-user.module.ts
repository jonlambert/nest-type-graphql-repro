import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterestedUser } from './interested-user.entity';
import { InterestedUserResolver } from './interested-user.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([InterestedUser]),
  ],
  providers: [InterestedUserResolver],
  controllers: [],
  exports: [],
})
export class InterestedUserModule {}
