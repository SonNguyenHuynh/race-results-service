import { IEntity } from './entity.interface';
import { RaceEntity } from './race.entity';

export class RankEntity implements IEntity {
  id: string;
  raceId: string;
  teamId: string;
  rank: number;

  race: RaceEntity;

  constructor(init?: Partial<RankEntity>) {
    Object.assign(this, init);
  }

  equals(entity: IEntity): boolean {
    if (!(entity instanceof RankEntity)) return false;

    return this.id === entity.id;
  }
}
