const request = require('request-promise-native');

const API_KEY = 'f785820ced60a6fd3537887c11fa4195';
const API = 'http://api.openweathermap.org/data/2.5/';

export class Cities {

 async getCities(numberOfCities: number) {
  const latitude = Math.floor(Math.random() * (Math.floor(55) - Math.ceil(34) + 1)) + Math.ceil(34);
  const longitude = Math.floor(Math.random() * (Math.floor(16) - Math.ceil(101) + 1)) + Math.ceil(101);
    try {
    const options = {
      method: 'GET'
      ,url: `${API}find?lat=${latitude}&lon=${longitude}&cnt=${numberOfCities}&appid=${API_KEY}&units=metric`
      ,json: true
    }
    const cities = await request(options);
    return cities;
    } catch(error)
    {
      console.log(error);
    }
 }

 async getOneCityByName(nameOfCity: string) { 
  try {
    const options = {
      method: 'GET'
      ,url: `${API}weather?q=${nameOfCity}&appid=${API_KEY}&units=metric`
      ,json: true
    }
    const newCity = await request(options);
    return newCity;
    } catch(error)
    {
      console.log(error);
    }
 }

 async getOneCityById(idOfCity: number) {
  try {
    const options = {
      method: 'GET'
      ,url: `${API}weather?id=${idOfCity}&appid=${API_KEY}&units=metric`
      ,json: true
    }
    const newCity = await request(options);
    return newCity;
    } catch(error)
    {
      console.log(error);
    }
 }
 
}