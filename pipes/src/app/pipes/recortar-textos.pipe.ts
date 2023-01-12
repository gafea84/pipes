import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortarTextos'
})
export class RecortarTextosPipe implements PipeTransform {

  transform(value: string, ...args: any): string {
    //opcion 120 caracteres.
    //return value.slice(0, 120) + "..."

    let arr = value.split(" ");
    let final = (args[0] !== undefined) ? args[0] : 20;
    arr = arr.slice(0, final);
    let icono = (args[1] !== undefined) ? args[1] : '...';
    return `${arr.join(" ")} ${icono}`;

  }

}
