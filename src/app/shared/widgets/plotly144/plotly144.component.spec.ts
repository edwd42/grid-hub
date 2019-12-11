import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plotly144Component } from './plotly144.component';

describe('Plotly144Component', () => {
  let component: Plotly144Component;
  let fixture: ComponentFixture<Plotly144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plotly144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plotly144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
