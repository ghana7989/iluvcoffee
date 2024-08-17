import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity';
import { Event } from './src/events/entities/event.entity';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [Coffee, Event, Flavor],
  migrations: ['migrations/**/*.ts'],
  // cli: {
  //   migrationsDir: 'src/migrations',
  // },
});
