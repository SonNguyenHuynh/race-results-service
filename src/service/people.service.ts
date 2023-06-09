import { Inject, Injectable } from '@nestjs/common';
import { PeopleEntity } from 'src/enitity/people.entity';
import {
  PeopleRepository,
  PeopleRepositoryName,
} from 'src/repo/interface/people.interface';

@Injectable()
export class GetPeopleService {
  constructor(
    @Inject(PeopleRepositoryName)
    private readonly peopleRepo: PeopleRepository,
  ) {}
  GetPeople(name: string): Promise<PeopleEntity[]> {
    console.log('')
    const A = this.peopleRepo.findByName(name);
    console.log(A);
    return A;
  }
}
