import { IEntity } from './entity.interface';

export class RaceEntity implements IEntity {
  id: string;
  name: string;
  year: number;

  constructor(init?: Partial<RaceEntity>) {
    Object.assign(this, init);
  }

  equals(entity: IEntity): boolean {
    if (!(entity instanceof RaceEntity)) return false;

    return this.id === entity.id;
  }
}
