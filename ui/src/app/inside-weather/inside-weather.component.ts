import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { switchMap, retry } from 'rxjs/operators';
import { Inside } from './inside.model';

@Component({
  selector: 'app-inside-weather',
  templateUrl: './inside-weather.component.html',
  styleUrls: ['./inside-weather.component.css']
})
export class InsideWeatherComponent implements OnInit, OnDestroy {

  @Input() displayCelcius = false;
  public insideWeather: Inside;
  private insidePolling$: Observable<Inside>;

  constructor(private http: HttpClient) {
    this.getWeather().subscribe((c) => this.insideWeather = c);
    this.insidePolling$ = timer(5000).pipe(switchMap(() => this.getWeather()), retry());
  }

  ngOnInit(): void {
    this.insidePolling$.subscribe((c) => {
      this.insideWeather = c;
    });
  }

  ngOnDestroy(): void {

  }

  getWeather(): Observable<Inside> {
    return this.http.get<Inside>('http://10.0.0.30/api/weather/inside');
  }
}
