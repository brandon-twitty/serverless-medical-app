import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOwnerDetailsComponent } from './get-owner-details.component';

describe('GetOwnerDetailsComponent', () => {
  let component: GetOwnerDetailsComponent;
  let fixture: ComponentFixture<GetOwnerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetOwnerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOwnerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
