import { IIdentifier } from '../../../core/models/db/identifier';
import { IAuditInfo, ISoftDelete } from '../../../core/models/db/audit-info';
import { Coord } from '../../../getCities/weatherDatas';
import { Main } from '../../../getCities/weatherDatas';
import { Wind } from '../../../getCities/weatherDatas';
import { Sys } from '../../../getCities/weatherDatas';
import { Rain } from '../../../getCities/weatherDatas';
import { Snow } from '../../../getCities/weatherDatas';
import { Clouds } from '../../../getCities/weatherDatas';
import { Weather } from '../../../getCities/weatherDatas';

export interface ICity extends IIdentifier, ISoftDelete, IAuditInfo {
    id: number;
    name: string;
    coord: Coord;
    main: Main;
    dt: string;
    wind: Wind;
    sys: Sys;
    rain: Rain;
    snow: Snow;
    clouds: Clouds;
    weather: Array<Weather>;
}