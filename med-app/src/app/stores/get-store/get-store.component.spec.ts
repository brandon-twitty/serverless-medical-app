import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStoreComponent } from './get-store.component';

describe('GetStoreComponent', () => {
  let component: GetStoreComponent;
  let fixture: ComponentFixture<GetStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
