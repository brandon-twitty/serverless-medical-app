import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOwnerComponent } from './get-owner.component';

describe('GetOwnerComponent', () => {
  let component: GetOwnerComponent;
  let fixture: ComponentFixture<GetOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
