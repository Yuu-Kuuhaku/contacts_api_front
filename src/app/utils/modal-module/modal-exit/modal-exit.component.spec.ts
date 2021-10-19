import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExitComponent } from './modal-exit.component';

describe('ModalExitComponent', () => {
  let component: ModalExitComponent;
  let fixture: ComponentFixture<ModalExitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
