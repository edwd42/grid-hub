import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KwhSimComponent } from './kwh-sim.component';

describe('KwhSimComponent', () => {
  let component: KwhSimComponent;
  let fixture: ComponentFixture<KwhSimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KwhSimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KwhSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
