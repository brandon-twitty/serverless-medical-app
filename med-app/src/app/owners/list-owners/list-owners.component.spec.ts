import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOwnersComponent } from './list-owners.component';

describe('ListOwnersComponent', () => {
  let component: ListOwnersComponent;
  let fixture: ComponentFixture<ListOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
