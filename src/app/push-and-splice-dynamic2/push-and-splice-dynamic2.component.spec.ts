import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushAndSpliceDynamic2Component } from './push-and-splice-dynamic2.component';

describe('PushAndSpliceDynamic2Component', () => {
  let component: PushAndSpliceDynamic2Component;
  let fixture: ComponentFixture<PushAndSpliceDynamic2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushAndSpliceDynamic2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PushAndSpliceDynamic2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
