import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { RankEntity } from 'src/entity/rank.entity';
import { RankRepository } from './interface/rank.interface';

export class RankRepositoryImpl implements RankRepository {
  constructor(
    @InjectRepository(RankEntity)
    private readonly repo: Repository<RankEntity>,
  ) {}
  public async findByRaceId(id: string): Promise<RankEntity[]> {
    return await this.repo.find({
      where: {
        raceId: id,
      },
    });
  }
}
