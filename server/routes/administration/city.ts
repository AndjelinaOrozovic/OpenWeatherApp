import { NextFunction } from 'express';

import { Router } from '../../core/express/router';
import { Server } from '../../core/server';
import { IRequest } from '../../core/models/express/request';
import { IResponse } from '../../core/models/express/response';
import { CityRepository } from '../../repositories/city';
import { Cities } from '../../getCities/getCities';

export class CityRouter extends Router {

  constructor(server: Server) {
    super(server);
  }

  initRoutes() {
    this.router.route('/')
      .get(this.queryAll.bind(this))
      .post(this.createNewCity.bind(this));
    this.router.route('/search')
      .get(this.getCity.bind(this));
  }

  async queryAll(request: IRequest, response: IResponse, next: NextFunction) {
    try {
      const cr = new CityRepository(this.server);
      response.data = await cr.query();
      next();
    } catch (error) {
      next(Router.handleError(error, request, response));
    }
  }
  
  async getCity(request: IRequest, response: IResponse, next: NextFunction) 
  {
    try {
    const cityName = request.query.newCity;
    const cityData = new Cities();
    const oneCity = await cityData.getOneCityByName(<string>cityName);
    response.data = oneCity ? [oneCity] : [];
    next();
    } catch (error) {
      console.log(error);
    }
  }

  async createNewCity(request: IRequest, response: IResponse, next: NextFunction) {
    try {

      const cr = new CityRepository(this.server);
      const city = request.body;

      const newCity =  await cr.create((newCity) => {
              newCity.id = city.id;
              newCity.name = city.name;
              newCity.coord = city.coord;
              newCity.main = city.main;
              newCity.dt = city.dt;
              newCity.wind = city.wind;
              newCity.sys = city.sys;
              newCity.clouds = city.clouds;
              newCity.weather = city.weather[0];
            });

      response.data = await cr.getOne({_id : newCity._id});
      next();
    } catch (error) {
      next(Router.handleError(error, request, response));
    }
  }

}