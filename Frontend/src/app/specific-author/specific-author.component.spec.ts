import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificAuthorComponent } from './specific-author.component';

describe('SpecificAuthorComponent', () => {
  let component: SpecificAuthorComponent;
  let fixture: ComponentFixture<SpecificAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
