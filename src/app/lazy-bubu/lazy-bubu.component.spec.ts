import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyBubuComponent } from './lazy-bubu.component';

describe('LazyBubuComponent', () => {
  let component: LazyBubuComponent;
  let fixture: ComponentFixture<LazyBubuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyBubuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyBubuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
