import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideWeatherComponent } from './inside-weather.component';

describe('InsideWeatherComponent', () => {
  let component: InsideWeatherComponent;
  let fixture: ComponentFixture<InsideWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
