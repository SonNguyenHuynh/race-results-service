import { Controller, Get, Inject, Query } from '@nestjs/common';
import { PeopleService } from './service/people.service';
import { PeopleEntity } from './entity/people.entity';
import { TeamEntity } from './entity/team.entity';
import { TeamService } from './service/team.service';
import { RankService } from './service/rank.service';
import { RaceService } from './service/race.service';
import { RaceEntity } from './entity/race.entity';
import { RankDto } from './dto/rank.dto';

@Controller()
export class AppController {
  constructor(
    @Inject(PeopleService)
    private readonly getPeopleService: PeopleService,
    @Inject(TeamService)
    private readonly getTeamService: TeamService,
    @Inject(RankService)
    private readonly getRankService: RankService,
    @Inject(RaceService)
    private readonly getRaceService: RaceService,
  ) {}

  @Get('/people')
  public async searchPeopleByName(
    @Query('name') name: string,
    @Query('year') year: number,
  ): Promise<PeopleEntity[]> {
    return this.getPeopleService.getPeople(name, year);
  }

  @Get('/team')
  public async searchTeamByName(
    @Query('name') name: string,
    @Query('year') year: number,
  ): Promise<TeamEntity[]> {
    return this.getTeamService.getTeam(name, year);
  }
  @Get('/rank')
  public async searchRankByYear(
    @Query('name') name: string,
    @Query('year') year: number,
  ): Promise<RankDto[]> {
    return this.getRankService.getRankByYear(name, year);
  }
  @Get('/race')
  public async searchRaceByName(
    @Query('name') name: string,
    @Query('year') year: number,
  ): Promise<RaceEntity> {
    return this.getRaceService.getRace(name, year);
  }
}
