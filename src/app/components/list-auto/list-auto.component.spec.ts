import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAutoComponent } from './list-auto.component';

describe('ListAutoComponent', () => {
  let component: ListAutoComponent;
  let fixture: ComponentFixture<ListAutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAutoComponent]
    });
    fixture = TestBed.createComponent(ListAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
