import { Connection } from 'mongoose';

import { Factory } from '../../../core/db/factory';
import { ICity } from './city';
import { CitySchema } from './schema';

export class CityFactory extends Factory<ICity> {
  constructor(connection: Connection, ) {
    super({
      connection: connection,
      name: 'City',
      definition: CitySchema,
      indexes: [
        {
          fields: {
            'id': 1,
            'name': 1
          },
          options: {
            'unique': true
          }
        }
      ]
    });
  }
}
