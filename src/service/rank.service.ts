import { Inject, Injectable } from '@nestjs/common';
import { RankDto } from 'src/dto/rank.dto';
import {
  RaceRepository,
  RaceRepositoryName,
} from 'src/repo/interface/race.interface';
import {
  RankRepository,
  RankRepositoryName,
} from 'src/repo/interface/rank.interface';
import {
  TeamRepository,
  TeamRepositoryName,
} from 'src/repo/interface/team.interface';

@Injectable()
export class RankService {
  constructor(
    @Inject(RankRepositoryName)
    private readonly rankRepo: RankRepository,
    @Inject(RaceRepositoryName)
    private readonly raceRepo: RaceRepository,
    @Inject(TeamRepositoryName)
    private readonly teamRepo: TeamRepository,
  ) {}

  public async getRankByYear(name: string, year: number): Promise<RankDto[]> {
    const race = await this.raceRepo.findByNameAndYear(name, year);

    if (race) {
      const ranks = await this.rankRepo.findByRaceId(race.id);
      if (ranks.length === 0) {
        return [];
      }

      const results: RankDto[] = [];

      for (const rank of ranks) {
        const team = await this.teamRepo.findById(rank.teamId);
        if (team) {
          const item = new RankDto({
            id: rank.id,
            raceName: race.name,
            teamName: team.id,
            rank: rank.rank,
          });
          results.push(item);
        }
      }
      return results;
    }
    return [];
  }
}
