import { Server } from '../core/server';
import { Repository } from '../core/repository';
import { ICity } from '../db/models/city/city';

export class CityRepository extends Repository<ICity> {

  constructor(server: Server) {
    super({
      factory: server.factories.city,
      userId: server.systemUserId,
      aggregationQuery: {
        $match: {
          'isDeleted': false,
        },
        $project: {
          'id': 1,
          'name': 1,
          'coord': 1,
          'main': 1,
          'wind': 1,
          'sys' : 1,
          'rain' : 1,
          'snow' : 1,
          'clouds' : 1,
          'weather' : 1
        }
      },
      auditLogger: server.auditLogger
    });
  }
}
