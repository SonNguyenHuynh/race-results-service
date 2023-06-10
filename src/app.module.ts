import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { PeopleService } from './service/people.service';
import { RepositoryModule } from './repo/repository.module';
import { RankService } from './service/rank.service';
import { RaceService } from './service/race.service';
import { TeamService } from './service/team.service';
@Module({
  imports: [RepositoryModule],
  controllers: [AppController],
  providers: [PeopleService, RankService, RaceService, TeamService],
})
export class AppModule {}
