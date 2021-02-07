import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo8AnimauxComponent } from './exo8-animaux.component';

describe('Exo8AnimauxComponent', () => {
  let component: Exo8AnimauxComponent;
  let fixture: ComponentFixture<Exo8AnimauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo8AnimauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exo8AnimauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
