import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { TeamRepository } from './interface/team.interface';
import { TeamEntity } from 'src/entity/team.entity';

export class TeamRepositoryImpl implements TeamRepository {
  constructor(
    @InjectRepository(TeamEntity)
    private readonly repo: Repository<TeamEntity>,
  ) {}
  public async findById(id: string): Promise<TeamEntity> {
    return await this.repo.findOne({
      where: {
        id: id,
      },
    });
  }

  public async findByNameAndYear(
    name: string,
    year: number,
  ): Promise<TeamEntity[]> {
    return await this.repo.find({
      where: {
        name: name,
        yearOfAttendance: year,
      },
    });
  }
}
