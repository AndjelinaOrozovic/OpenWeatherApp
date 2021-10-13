export interface Coord 
{
    lat?: number;
    lon?: number;
}

export interface Main {
    temp?: number;
    feels_like?: number;
    temp_min?: number;
    temp_max?: number;
    pressure?: number;
    humidity?: number;
    sea_level?: number;
    grnd_level?: number;
}

export interface Wind {
    speed?: number;
    deg?: number;
}

export interface Sys {
    country?: string;
}

export interface Rain {
    rain?: string;
}

export interface Snow {
    snow?: string;
}

export interface Clouds {
    all?: number;
}

export interface Weather {
    id?: number;
    main?: string;
    description?: string;
    icon?: string;
}