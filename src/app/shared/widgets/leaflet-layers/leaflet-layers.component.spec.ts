import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletLayersComponent } from './leaflet-layers.component';

describe('LeafletLayersComponent', () => {
  let component: LeafletLayersComponent;
  let fixture: ComponentFixture<LeafletLayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafletLayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletLayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
