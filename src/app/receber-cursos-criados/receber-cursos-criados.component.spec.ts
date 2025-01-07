import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceberCursosCriadosComponent } from './receber-cursos-criados.component';

describe('ReceberCursosCriadosComponent', () => {
  let component: ReceberCursosCriadosComponent;
  let fixture: ComponentFixture<ReceberCursosCriadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceberCursosCriadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceberCursosCriadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
