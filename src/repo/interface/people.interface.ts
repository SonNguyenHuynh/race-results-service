import { PeopleEntity } from 'src/entity/people.entity';

export const PeopleRepositoryName = 'PeopleRepository.Interface';
export interface PeopleRepository {
  findByName(name: string, year: number): Promise<PeopleEntity[]>;
}
