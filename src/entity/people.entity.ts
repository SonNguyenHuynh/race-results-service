import { IEntity } from './entity.interface';

export class PeopleEntity implements IEntity {
  id: number;
  teamId: string;
  name: string;
  dateOfBirth: string;
  placeOfBirth: string;
  points: number;
  country: string;
  jod: string;
  yearOfAttendance: number;

  constructor(init?: Partial<PeopleEntity>) {
    Object.assign(this, init);
  }

  equals(entity: IEntity): boolean {
    if (!(entity instanceof PeopleEntity)) return false;

    return this.id === entity.id;
  }
}
