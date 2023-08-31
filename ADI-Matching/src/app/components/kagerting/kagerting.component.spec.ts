import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KagertingComponent } from './kagerting.component';

describe('KagertingComponent', () => {
  let component: KagertingComponent;
  let fixture: ComponentFixture<KagertingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KagertingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KagertingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
