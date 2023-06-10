import { TeamEntity } from 'src/entity/team.entity';

export const TeamRepositoryName = 'TeamRepository.Interface';
export interface TeamRepository {
  findByNameAndYear(name: string, year: number): Promise<TeamEntity[]>;
  findById(id: string): Promise<TeamEntity>;
}
