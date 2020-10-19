import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { switchMap, retry } from 'rxjs/operators';
import { Inside } from '../inside-weather/inside.model';
import { Outside } from './outside.model';

@Component({
  selector: 'app-outside-weather',
  templateUrl: './outside-weather.component.html',
  styleUrls: ['./outside-weather.component.css']
})
export class OutsideWeatherComponent implements OnInit {
  @Input() displayCelcius = false;
  private outsidePolling$: Observable<Outside>;
  public outsideWeather: Outside;
  constructor(private http: HttpClient) {
    this.getWeather().subscribe(c => this.outsideWeather = c);
    this.outsidePolling$ = timer(5000).pipe(switchMap(() => this.getWeather()), retry());
   }

  ngOnInit(): void {
    this.outsidePolling$.subscribe((c) => {
      this.outsideWeather = c;
    });
  }

  getWeather(): Observable<Outside> {
    return this.http.get<Outside>('http://10.0.0.30/api/weather/outside');
  }

}
