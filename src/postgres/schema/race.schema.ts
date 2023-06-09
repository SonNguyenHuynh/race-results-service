import { EntitySchema } from 'typeorm';
import { RaceEntity } from 'src/enitity/race.entity';

export const RaceSchema = new EntitySchema<RaceEntity>({
  name: 'RaceEntity',
  tableName: 'RACE',
  target: RaceEntity,
  columns: {
    id: {
      type: String,
      primary: true,
      length: 36,
      name: 'id',
    },
    name: {
      type: String,
      length: 1000,
      nullable: false,
      name: 'name',
    },
    teamId: {
      type: String,
      length: 100,
      nullable: false,
      name: 'team_id',
    },
    year: {
      type: Number,
      nullable: true,
      name: 'year',
    },
  },
  orderBy: {
    createdAt: 'ASC',
  },
});
