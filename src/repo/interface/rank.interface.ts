import { RankEntity } from 'src/entity/rank.entity';

export const RankRepositoryName = 'RankRepository.Interface';
export interface RankRepository {
  findByRaceId(id: string): Promise<RankEntity[]>;
}
