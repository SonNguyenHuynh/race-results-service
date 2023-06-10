import { Inject, Injectable } from '@nestjs/common';
import { RaceEntity } from 'src/entity/race.entity';

import {
  RaceRepository,
  RaceRepositoryName,
} from 'src/repo/interface/race.interface';

@Injectable()
export class RaceService {
  constructor(
    @Inject(RaceRepositoryName)
    private readonly repo: RaceRepository,
  ) {}

  public async getRace(name: string, year): Promise<RaceEntity> {
    return await this.repo.findByNameAndYear(name, year);
  }
}
