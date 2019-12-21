import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pyplot1Component } from './pyplot1.component';

describe('Pyplot1Component', () => {
  let component: Pyplot1Component;
  let fixture: ComponentFixture<Pyplot1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pyplot1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pyplot1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
