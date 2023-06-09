import { IEntity } from './entity.interface';

export class RaceEntity implements IEntity {
  id: number;
  name: string;
  year: string;
  teamId: string;

  constructor(init?: Partial<RaceEntity>) {
    Object.assign(this, init);
  }

  equals(entity: IEntity): boolean {
    if (!(entity instanceof RaceEntity)) return false;

    return this.id === entity.id;
  }
}
