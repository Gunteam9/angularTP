import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRow3Component } from './table-row3.component';

describe('TableRow3Component', () => {
  let component: TableRow3Component;
  let fixture: ComponentFixture<TableRow3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRow3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRow3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
