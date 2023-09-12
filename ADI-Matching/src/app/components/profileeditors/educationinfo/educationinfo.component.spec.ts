import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationinfoComponent } from './educationinfo.component';

describe('EducationinfoComponent', () => {
  let component: EducationinfoComponent;
  let fixture: ComponentFixture<EducationinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
