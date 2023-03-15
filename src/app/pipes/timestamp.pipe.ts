import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

  constructor(private datePipe: DatePipe){}

  transform(value: any): any {
    const date = new Date(value.seconds * 1000 + value.nanoseconds / 1000000);
    return this.datePipe.transform(date, 'medium');
  }

}
