import { InterestedUser } from './interested-user.entity';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver()
export class InterestedUserResolver {
  @Mutation(returns => InterestedUser)
  async createInterestedUser() {
    return {};
  }

  @Query(returns => [InterestedUser])
  interestedUsers() {
    return [];
  }
}
