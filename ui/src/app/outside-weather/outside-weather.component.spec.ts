import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideWeatherComponent } from './outside-weather.component';

describe('OutsideWeatherComponent', () => {
  let component: OutsideWeatherComponent;
  let fixture: ComponentFixture<OutsideWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
