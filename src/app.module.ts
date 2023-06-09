import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { GetPeopleService } from './service/people.service';
import { RepositoryModule } from './repo/repository.module';
@Module({
  imports: [RepositoryModule],
  controllers: [AppController],
  providers: [GetPeopleService],
})
export class AppModule {}
