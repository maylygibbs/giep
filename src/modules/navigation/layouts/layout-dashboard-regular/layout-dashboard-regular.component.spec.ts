import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDashboardRegularComponent } from './layout-dashboard-regular.component';

describe('LayoutDashboardRegularComponent', () => {
  let component: LayoutDashboardRegularComponent;
  let fixture: ComponentFixture<LayoutDashboardRegularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutDashboardRegularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDashboardRegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
