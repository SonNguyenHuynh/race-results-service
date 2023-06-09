import { PeopleEntity } from 'src/enitity/people.entity';

export const PeopleRepositoryName = 'PeopleRepository.Interface';
export interface PeopleRepository {
  findByName(name: string): Promise<PeopleEntity[]>;
}
