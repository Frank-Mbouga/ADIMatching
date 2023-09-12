import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchrequestsComponent } from './matchrequests.component';

describe('MatchrequestsComponent', () => {
  let component: MatchrequestsComponent;
  let fixture: ComponentFixture<MatchrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchrequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
