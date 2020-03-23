import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStoresComponent } from './get-stores.component';

describe('GetStoresComponent', () => {
  let component: GetStoresComponent;
  let fixture: ComponentFixture<GetStoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
