import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMateriasComponent } from './consultar-materias.component';

describe('ConsultarMateriasComponent', () => {
  let component: ConsultarMateriasComponent;
  let fixture: ComponentFixture<ConsultarMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarMateriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
