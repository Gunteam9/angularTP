import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRow2Component } from './table-row2.component';

describe('TableRow2Component', () => {
  let component: TableRow2Component;
  let fixture: ComponentFixture<TableRow2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRow2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
