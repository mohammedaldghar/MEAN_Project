import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuthersComponent } from './admin-authers.component';

describe('AdminAuthersComponent', () => {
  let component: AdminAuthersComponent;
  let fixture: ComponentFixture<AdminAuthersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAuthersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAuthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
