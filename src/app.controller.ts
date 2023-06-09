import { Controller, Get, Inject, Query } from '@nestjs/common';
import { GetPeopleService } from './service/people.service';
import { PeopleEntity } from './enitity/people.entity';

@Controller()
export class AppController {
  constructor(
    @Inject(GetPeopleService)
    private readonly getPeopleService: GetPeopleService,
  ) {}

  @Get('/people')
  public async searchLocation(
    @Query('name') name: string,
  ): Promise<PeopleEntity[]> {
    console.log('controller')
    return this.getPeopleService.GetPeople(name);
  }
}
