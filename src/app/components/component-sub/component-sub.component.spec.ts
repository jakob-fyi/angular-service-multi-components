import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSubComponent } from './component-sub.component';

describe('ComponentSubComponent', () => {
  let component: ComponentSubComponent;
  let fixture: ComponentFixture<ComponentSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
