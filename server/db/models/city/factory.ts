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
            // 'coord': 1,
            // 'main': 1,
            // 'dt': 1,
            // 'wind': 1,
            // 'sys': 1,
            // 'rain': 1,
            // 'snow': 1,
            // 'clouds': 1,
            // 'weather': 1,
            // 'isDelated': 1
          },
          options: {
            'unique': true
          }
        }
      ]
    });
  }
}
