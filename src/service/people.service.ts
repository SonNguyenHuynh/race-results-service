import { Inject, Injectable } from '@nestjs/common';
import { PeopleEntity } from 'src/entity/people.entity';
import {
  PeopleRepository,
  PeopleRepositoryName,
} from 'src/repo/interface/people.interface';

@Injectable()
export class PeopleService {
  constructor(
    @Inject(PeopleRepositoryName)
    private readonly repo: PeopleRepository,
  ) {}

  public async getPeople(name: string, year: number): Promise<PeopleEntity[]> {
    return this.repo.findByName(name, year);
  }
}
