import { EventEmitter, inject, Injectable } from '@angular/core';
import { LogService } from '../shared/log.service';


@Injectable({
  providedIn: 'root'
})
export class CursosService {
  cursos:string[] = ['Java', 'Angular', 'React'];
  http:string = ''

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>()
  private logService = inject(LogService)

  constructor() {
  }

  getCursos() {
    this.logService.consoleLog("Obtendo lista de cursos")
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.consoleLog("Criando o novo curso "+ curso)
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso)
  }
}
