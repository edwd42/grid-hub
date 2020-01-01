import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EiaComponent } from './eia.component';

describe('EiaComponent', () => {
  let component: EiaComponent;
  let fixture: ComponentFixture<EiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
