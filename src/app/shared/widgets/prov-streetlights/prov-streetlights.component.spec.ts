import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvStreetlightsComponent } from './prov-streetlights.component';

describe('ProvStreetlightsComponent', () => {
  let component: ProvStreetlightsComponent;
  let fixture: ComponentFixture<ProvStreetlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvStreetlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvStreetlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
