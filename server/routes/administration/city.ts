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
      .post(this.createNewCity.bind(this)); // mozemo razdvojiti u novu rutu '/newcity' ali ovdje post ne smeta get-u, pa smo ih stavili zajedno
    this.router.route('/search')
      .get(this.getCity.bind(this))
  }

  async getCity(request: IRequest, response: IResponse, next: NextFunction) 
  {
    try {
    const cityName = request.query.newCity;
    const cityData = new Cities();
    const oneCity = await cityData.getOneCity(<string>cityName);
    // if(!oneCity) { 
    //   response.data = [];
    // } else response.data = [oneCity];
    response.data = oneCity ? [oneCity] : [];
    console.log(response.data);
    next();
    } catch (error) {
      console.log(error);
    }
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

  async createNewCity(request: IRequest, response: IResponse, next: NextFunction) {
    try {

      const cr = new CityRepository(this.server);
      const city = request.body;

      //metoda za upis samo imena grada u bazu
      // const newCity = await cr.create((cityNew) => {
        
      //   cityNew.name = city.name;

      // });
      const cityData = new Cities();
      const newCity = await cityData.getOneCity(city.name);
      await cr.create((city) => {
              city.id = newCity.id;
              city.name = newCity.name;
              city.coord = newCity.coord;
              city.main = newCity.main;
              city.dt = newCity.dt;
              city.wind = newCity.wind;
              city.sys = newCity.sys;
              //city.rain = newCity.rain;
              //city.snow = newCity.snow;
              city.clouds = newCity.clouds;
              city.weather = newCity.weather[0];
              console.log(city);
            });
            console.log(newCity);

      // response.data = await cr.getOne({_id : newCity._id});
      next();
    } catch (error) {
      next(Router.handleError(error, request, response));
    }
  }

}