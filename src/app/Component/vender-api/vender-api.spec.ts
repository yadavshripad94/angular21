import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenderApi } from './vender-api';

describe('VenderApi', () => {
  let component: VenderApi;
  let fixture: ComponentFixture<VenderApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenderApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenderApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
