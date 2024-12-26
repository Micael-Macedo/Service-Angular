import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  imports: [],
  templateUrl: './criar-curso.component.html',
  styleUrl: './criar-curso.component.css'
})
export class CriarCursoComponent implements OnInit {
  cursos:string[] = []

  constructor(private _cursoService: CursosService) {}

  ngOnInit(){
    this.cursos = this._cursoService.getCursos();
  }

  onAddCurso(curso:string){
    this._cursoService.addCurso(curso);
  }


}
