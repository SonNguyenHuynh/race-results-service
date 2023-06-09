import { DataSource, DataSourceOptions } from 'typeorm';
import { PeopleSchema } from './schema/people.schema';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'postgres',
  password: '123456',
  database: 'postgres',
  entities: [PeopleSchema],
  migrations: [__dirname + '/migration/*{.ts,.js}'],
  synchronize: true,
};
console.log(__dirname);

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
