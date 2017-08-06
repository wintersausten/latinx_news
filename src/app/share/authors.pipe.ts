import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authors'
})

export class AuthorsPipe implements PipeTransform {
  transform(value: string[]): string {
    var finalString = "";
    var count = 0;
    value.forEach(function(author){

      if(count == value.length - 1)
        finalString = finalString + author
      
      else
        finalString = finalString + author + ", "; 
      
      count++;
    });

    return finalString;
  }
}