import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CursosService {
  cursos:string[] = ['Java', 'Angular', 'React'];
  http:string = ''

  constructor() {
    console.log('CursosService');
  }

  getCursos() {
    return this.cursos;
  }

  addCurso(curso: string) {
    this.cursos.push(curso);
  }
}
