import { EntitySchema } from 'typeorm';
import { RankEntity } from 'src/entity/rank.entity';

export const RankSchema = new EntitySchema<RankEntity>({
  name: 'RankEntity',
  tableName: 'RANK',
  target: RankEntity,
  columns: {
    id: {
      type: String,
      primary: true,
      length: 36,
      name: 'id',
    },
    raceId: {
      type: String,
      length: 100,
      nullable: false,
      name: 'race_id',
    },
    teamId: {
      type: String,
      length: 100,
      nullable: false,
      name: 'team_id',
    },
    rank: {
      type: Number,
      nullable: true,
      name: 'rank',
    },
  },
  relations: {
    race: {
      target: 'RaceEntity',
      joinColumn: {
        referencedColumnName: 'id',
        name: 'race_id',
      },
      nullable: false,
      primary: true,
      type: 'many-to-one',
    },
  },
});
