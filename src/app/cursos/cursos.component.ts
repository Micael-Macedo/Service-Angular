import { Component, inject } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  imports: [],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  cursos: string[] = [];
  cursosService:CursosService = inject(CursosService);

  constructor() {
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }
}
