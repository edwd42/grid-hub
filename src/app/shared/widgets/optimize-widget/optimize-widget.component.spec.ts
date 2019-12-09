import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizeWidgetComponent } from './optimize-widget.component';

describe('OptimizeWidgetComponent', () => {
  let component: OptimizeWidgetComponent;
  let fixture: ComponentFixture<OptimizeWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptimizeWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptimizeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
