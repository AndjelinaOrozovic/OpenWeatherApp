import { SchemaDefinition } from 'mongoose';

import { BaseSchemaDefinition } from '../../../core/db/base';
export const CitySchema: SchemaDefinition = {
  
  id: {
    type: Number,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  coord: {
    type: Object
  },
  main: {
    temp: Number,
    feels_like: Number,
    temp_min: Number,
    temp_max: Number,
    pressure: Number,
    humidity: Number,
    sea_level: Number,
    grnd_level: Number
  },
  dt: {
    type: String,
    required: false
  },
  wind: {
    speed: Number,
    deg: Number
  },
  sys: {
    country: String
  },
  rain: {
      rain: String
  },
  snow: {
      snow: String
  },
  clouds: {
    all: Number
  },
  weather: {
    id: Number,
    main: String,
    description: String,
    icon: String
  },
  ...BaseSchemaDefinition
};
