const request = require('request-promise-native');

const API_KEY = 'f785820ced60a6fd3537887c11fa4195';


export class Cities {

 //metod za dohvatanje 10 gradova
 async getCities(numberOfCities: number) {
  const latitude = Math.floor(Math.random() * (Math.floor(55) - Math.ceil(34) + 1)) + Math.ceil(34);
  const longitude = Math.floor(Math.random() * (Math.floor(16) - Math.ceil(101) + 1)) + Math.ceil(101);
    try {
    const options = {
      method: 'GET'
      ,url: `http://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&cnt=${numberOfCities}&appid=${API_KEY}&units=metric`
      ,json: true
    }
    const cities = await request(options);
    return cities;
    } catch(error)
    {
      console.log(error);
    }
 }

 //metod za dohvatanje jednog grada
 async getOneCity(nameOfCity: string) { //getByName
  try {
    const options = {
      method: 'GET'
      ,url: `https://api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&appid=${API_KEY}&units=metric`
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