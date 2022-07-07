import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRegularComponent } from './dashboard-regular.component';

describe('DashboardRegularComponent', () => {
  let component: DashboardRegularComponent;
  let fixture: ComponentFixture<DashboardRegularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardRegularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
