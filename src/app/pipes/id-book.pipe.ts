import { Input, Pipe, PipeTransform } from '@angular/core';
import { Book } from '../shared/models/book';

@Pipe({
  name: 'idBook',
  standalone: true
})
export class IdBookPipe implements PipeTransform {

  transform(value:Number):string {
    return `ref-${value}`;
  }

}
