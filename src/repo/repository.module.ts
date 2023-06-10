import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'src/postgres/configs';
import { PeopleRepositoryName } from 'src/repo/interface/people.interface';
import { PeopleSchema } from 'src/postgres/schema/people.schema';
import { PeopleRepositoryImpl } from './people.repository';
import { RankRepositoryName } from './interface/rank.interface';
import { RankRepositoryImpl } from './rank.repository';
import { RaceRepositoryName } from './interface/race.interface';
import { RaceRepositoryImpl } from './race.repository';
import { TeamRepositoryName } from './interface/team.interface';
import { TeamRepositoryImpl } from './team.repository';
import { RaceSchema } from 'src/postgres/schema/race.schema';
import { RankSchema } from 'src/postgres/schema/rank.schema';
import { TeamSchema } from 'src/postgres/schema/team.schema';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([
      PeopleSchema,
      RaceSchema,
      RankSchema,
      TeamSchema,
    ]),
  ],
  providers: [
    {
      provide: PeopleRepositoryName,
      useClass: PeopleRepositoryImpl,
    },
    {
      provide: RankRepositoryName,
      useClass: RankRepositoryImpl,
    },
    {
      provide: RaceRepositoryName,
      useClass: RaceRepositoryImpl,
    },
    {
      provide: TeamRepositoryName,
      useClass: TeamRepositoryImpl,
    },
  ],
  exports: [
    TypeOrmModule,
    PeopleRepositoryName,
    RankRepositoryName,
    RaceRepositoryName,
    TeamRepositoryName,
  ],
})
export class RepositoryModule {}
