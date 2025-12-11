import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForEx } from './ng-for-ex';

describe('NgForEx', () => {
  let component: NgForEx;
  let fixture: ComponentFixture<NgForEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgForEx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
