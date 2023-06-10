import { PeopleRepository } from './interface/people.interface';
import { PeopleEntity } from 'src/entity/people.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export class PeopleRepositoryImpl implements PeopleRepository {
  constructor(
    @InjectRepository(PeopleEntity)
    private readonly repo: Repository<PeopleEntity>,
  ) {}

  public async findByName(name: string, year: number): Promise<PeopleEntity[]> {
    return await this.repo.find({
      where: {
        name: name,
        yearOfAttendance: year,
      },
    });
  }
}
