import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  http:string = ''

  getCursos() {
    return ['Java', 'Angular', 'React'];
  }

}
