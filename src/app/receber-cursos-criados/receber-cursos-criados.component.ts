import { CursosService } from './../cursos/cursos.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-receber-cursos-criados',
  imports: [],
  templateUrl: './receber-cursos-criados.component.html',
  styleUrl: './receber-cursos-criados.component.css'
})
export class ReceberCursosCriadosComponent {

  curso!: string;

  private CursosService = inject(CursosService)

  ngOnInit(){
    this.CursosService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    )
  }

}
