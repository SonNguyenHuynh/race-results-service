import { EntitySchema } from 'typeorm';
import { PeopleEntity } from 'src/entity/people.entity';

export const PeopleSchema = new EntitySchema<PeopleEntity>({
  name: 'PeopleEntity',
  tableName: 'PEOPLE',
  target: PeopleEntity,
  columns: {
    id: {
      type: String,
      primary: true,
      length: 36,
      name: 'id',
    },
    country: {
      type: String,
      length: 100,
      nullable: false,
      name: 'country',
    },
    teamId: {
      type: String,
      length: 100,
      nullable: true,
      name: 'team_id',
    },
    dateOfBirth: {
      type: String,
      nullable: true,
      name: 'date_of_birth',
    },
    jod: {
      type: String,
      length: 100,
      nullable: true,
      name: 'jod',
    },
    name: {
      type: String,
      length: 100,
      nullable: false,
      name: 'name',
    },
    placeOfBirth: {
      type: String,
      length: 100,
      nullable: false,
      name: 'place_of_birth',
    },
    points: {
      type: Number,
      nullable: false,
      name: 'points',
    },
    yearOfAttendance: {
      type: Number,
      name: 'year_of_attendance',
    },
  },
});
