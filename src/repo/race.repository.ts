import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { RaceEntity } from 'src/entity/race.entity';
import { RaceRepository } from './interface/race.interface';

export class RaceRepositoryImpl implements RaceRepository {
  constructor(
    @InjectRepository(RaceEntity)
    private readonly repo: Repository<RaceEntity>,
  ) {}
  public async findByNameAndYear(
    name: string,
    year: number,
  ): Promise<RaceEntity> {
    return await this.repo.findOne({
      where: {
        name: name,
        year: year,
      },
    });
  }
}
