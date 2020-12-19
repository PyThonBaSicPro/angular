import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushAndSpliceDynamicComponent } from './push-and-splice-dynamic.component';

describe('PushAndSpliceDynamicComponent', () => {
  let component: PushAndSpliceDynamicComponent;
  let fixture: ComponentFixture<PushAndSpliceDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushAndSpliceDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PushAndSpliceDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
