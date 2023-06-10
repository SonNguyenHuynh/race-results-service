import { IEntity } from './entity.interface';

export class TeamEntity implements IEntity {
  id: string;
  name: string;
  base: string;
  chassis: string;
  powerUnit: string;
  firstTeamEntry: number;
  worldChampionships: number;
  yearOfAttendance: number;

  constructor(init?: Partial<TeamEntity>) {
    Object.assign(this, init);
  }

  equals(entity: IEntity): boolean {
    if (!(entity instanceof TeamEntity)) return false;

    return this.id === entity.id;
  }
}
