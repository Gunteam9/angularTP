import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGenerator4Component } from './card-generator4.component';

describe('CardGenerator4Component', () => {
  let component: CardGenerator4Component;
  let fixture: ComponentFixture<CardGenerator4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGenerator4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGenerator4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
