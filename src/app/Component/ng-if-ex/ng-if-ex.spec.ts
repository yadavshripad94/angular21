import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfEx } from './ng-if-ex';

describe('NgIfEx', () => {
  let component: NgIfEx;
  let fixture: ComponentFixture<NgIfEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIfEx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
