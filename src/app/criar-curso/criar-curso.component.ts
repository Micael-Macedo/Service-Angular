import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';
import { ReceberCursosCriadosComponent } from "../receber-cursos-criados/receber-cursos-criados.component";

@Component({
  selector: 'app-criar-curso',
  imports: [ReceberCursosCriadosComponent],
  templateUrl: './criar-curso.component.html',
  styleUrl: './criar-curso.component.css',
  providers: [CursosService]
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
