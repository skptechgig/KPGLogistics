import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleHomeListPageComponent } from './vehicle-home-list-page.component';

describe('VehicleHomeListPageComponent', () => {
  let component: VehicleHomeListPageComponent;
  let fixture: ComponentFixture<VehicleHomeListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleHomeListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleHomeListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
