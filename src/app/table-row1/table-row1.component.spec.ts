import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRow1Component } from './table-row1.component';

describe('TableRow1Component', () => {
  let component: TableRow1Component;
  let fixture: ComponentFixture<TableRow1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRow1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRow1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
