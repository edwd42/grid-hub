import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocrataChartComponent } from './socrata-chart.component';

describe('SocrataChartComponent', () => {
  let component: SocrataChartComponent;
  let fixture: ComponentFixture<SocrataChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocrataChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocrataChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
