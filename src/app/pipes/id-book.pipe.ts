import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idBook',
  standalone: true
})
export class IdBookPipe implements PipeTransform {

  transform(value:Number):string {
    return`Ref-301020`;
  }

}
