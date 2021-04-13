import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {

  transform(value: any): any {
    const date = new Date(value).toLocaleDateString();
    return date;
  }

}
