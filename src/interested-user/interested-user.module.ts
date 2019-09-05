import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterestedUser } from '@api/interested-user/interested-user.entity';
import { InterestedUserResolver } from '@api/interested-user/interested-user.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([InterestedUser]),
  ],
  providers: [InterestedUserResolver],
  controllers: [],
  exports: [],
})
export class InterestedUserModule {}
