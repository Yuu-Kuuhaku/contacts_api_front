/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Contacts_addComponent } from './contacts_add.component';

describe('Contacts_addComponent', () => {
  let component: Contacts_addComponent;
  let fixture: ComponentFixture<Contacts_addComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Contacts_addComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Contacts_addComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
