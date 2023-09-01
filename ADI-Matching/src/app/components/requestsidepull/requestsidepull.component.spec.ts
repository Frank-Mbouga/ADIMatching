import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsidepullComponent } from './requestsidepull.component';

describe('RequestsidepullComponent', () => {
  let component: RequestsidepullComponent;
  let fixture: ComponentFixture<RequestsidepullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsidepullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestsidepullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
