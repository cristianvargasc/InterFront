import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionMateriasComponent } from './inscripcion-materias.component';

describe('InscripcionMateriasComponent', () => {
  let component: InscripcionMateriasComponent;
  let fixture: ComponentFixture<InscripcionMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscripcionMateriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
