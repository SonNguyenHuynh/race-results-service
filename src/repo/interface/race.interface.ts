import { RaceEntity } from 'src/entity/race.entity';

export const RaceRepositoryName = 'RaceRepository.Interface';
export interface RaceRepository {
  findByNameAndYear(name: string, year: number): Promise<RaceEntity>;
}
