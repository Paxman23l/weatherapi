export interface Outside {
    cod:        number;
    weather:    Weather[];
    id:         number;
    timezone:   number;
    clouds:     Clouds;
    base:       string;
    sys:        Sys;
    dt:         number;
    visibility: number;
    name:       string;
    main:       Main;
    wind:       Wind;
    coord:      Coord;
}

export interface Clouds {
    all: number;
}

export interface Coord {
    lat: number;
    lon: number;
}

export interface Main {
    humidity:   number;
    temp_min:   number;
    temp:       number;
    temp_max:   number;
    feels_like: number;
    pressure:   number;
}

export interface Sys {
    sunset:  number;
    sunrise: number;
    type:    number;
    id:      number;
    country: string;
}

export interface Weather {
    main:        string;
    icon:        string;
    description: string;
    id:          number;
}

export interface Wind {
    gust:  number;
    speed: number;
    deg:   number;
}
