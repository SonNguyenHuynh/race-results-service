import { TeamEntity } from 'src/entity/team.entity';
import { EntitySchema } from 'typeorm';

export const TeamSchema = new EntitySchema<TeamEntity>({
  name: 'TeamEntity',
  tableName: 'TEAM',
  target: TeamEntity,
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
    base: {
      type: String,
      length: 100,
      nullable: false,
      name: 'base',
    },
    firstTeamEntry: {
      type: Number,
      nullable: true,
      name: 'first_team_entry',
    },
    chassis: {
      type: String,
      length: 10,
      nullable: true,
      name: 'chassis',
    },
    worldChampionships: {
      type: Number,
      nullable: true,
      name: 'world_championships',
    },
    powerUnit: {
      type: String,
      length: 10,
      nullable: true,
      name: 'power_unit',
    },
    yearOfAttendance: {
      type: Number,
      name: 'year_of_attendance',
    },
  },
});
