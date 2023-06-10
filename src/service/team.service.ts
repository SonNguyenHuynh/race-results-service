import { Inject, Injectable } from '@nestjs/common';
import { TeamEntity } from 'src/entity/team.entity';

import {
  TeamRepository,
  TeamRepositoryName,
} from 'src/repo/interface/team.interface';

@Injectable()
export class TeamService {
  constructor(
    @Inject(TeamRepositoryName)
    private readonly repo: TeamRepository,
  ) {}

  public async getTeam(name: string, year: number): Promise<TeamEntity[]> {
    return this.repo.findByNameAndYear(name, year);
  }
}
