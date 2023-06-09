import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import dataSource, { dataSourceOptions } from 'src/postgres/configs';
import { PeopleRepositoryName } from 'src/repo/interface/people.interface';
import { PeopleSchema } from 'src/postgres/schema/people.schema';
import { PeopleRepositoryImpl } from './people.repository';
import path from 'path';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([PeopleSchema]),
  ],
  providers: [
    {
      provide: PeopleRepositoryName,
      useClass: PeopleRepositoryImpl,
    },
  ],
  exports: [TypeOrmModule, PeopleRepositoryName],
})
export class RepositoryModule {}
