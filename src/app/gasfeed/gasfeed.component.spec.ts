import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GasfeedComponent } from './gasfeed.component';

describe('GasfeedComponent', () => {
  let component: GasfeedComponent;
  let fixture: ComponentFixture<GasfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
