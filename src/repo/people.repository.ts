import { PeopleRepository } from './interface/people.interface';
import { PeopleEntity } from 'src/enitity/people.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export class PeopleRepositoryImpl implements PeopleRepository {
  constructor(
    @InjectRepository(PeopleEntity)
    private readonly repo: Repository<PeopleEntity>,
  ) {}
  public async findByName(name: string): Promise<PeopleEntity[]> {
    console.log('repo-get');
    const a = await this.repo.find({
      where: {
        name: name,
      },
    });
    console.log(a);
    return a;
  }
}
