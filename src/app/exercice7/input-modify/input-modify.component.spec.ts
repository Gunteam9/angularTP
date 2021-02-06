import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputModifyComponent } from './input-modify.component';

describe('InputModifyComponent', () => {
  let component: InputModifyComponent;
  let fixture: ComponentFixture<InputModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
