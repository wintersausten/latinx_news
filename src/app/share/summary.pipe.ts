import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summarize'
})

export class SummarizePipe implements PipeTransform {
  transform(value: string): string {
    return value.substr(0, value.indexOf('.'));
  }
}