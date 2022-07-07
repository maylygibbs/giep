import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesMenuComponent } from './values-menu.component';

describe('ValuesMenuComponent', () => {
  let component: ValuesMenuComponent;
  let fixture: ComponentFixture<ValuesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuesMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
