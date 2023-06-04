import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MeteoATT, MeteoPRE } from '../models/met-attuale';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MeteoService {
  apiKey: string = 'API KEY';
  url: string;
  urlPre: string;

  constructor(private http: HttpClient) {}

  getMeteo(city: string) {
    // this.url = `CODICE API`;

    return this.http.get(this.url).pipe(
      map((response: any) => {
        const meteoInfo: MeteoATT = new MeteoATT(city);

        meteoInfo.tempoInfo = {
          id: response.weather[0].id,
          cielo: response.weather[0].main,
          descrizione: response.weather[0].description,
          icon: response.weather[0].icon,
        };

        meteoInfo.principale = {
          temperatura: response.main.temp,
          tempMax: response.main.temp_max,
          tempMin: response.main.temp_min,
          umidita: response.main.humidity,
        };

        meteoInfo.vento = {
          velocitaVento: response.wind.speed,
        };

        return meteoInfo;
      })
    );
  }

  getPrevisioni(city: string) {
    // https: this.urlPre = `codice API`;

    return this.http.get(this.urlPre).pipe(
      map((response: any) => {
        const meteoPrevisioni: MeteoPRE = new MeteoPRE(city);

        meteoPrevisioni.priPrev = {
          temperaturaPRE: response.list[0].main.temp,
          temperaturaMIN: response.list[0].main.temp_min,
          temperaturaMAX: response.list[0].main.temp_max,
          umiditaPRE: response.list[0].main.humidity,
        };

        meteoPrevisioni.infoVento = {
          vento: response.list[0].wind.speed,
        };

        meteoPrevisioni.tempoInfo = {
          descrizione: response.list[0].weather[0].description,
        };
        return meteoPrevisioni;
      })
    );
  }
}
