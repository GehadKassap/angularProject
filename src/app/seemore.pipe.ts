//using this pipe to limit desc of product to display it in see details pg;
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(description:string , limit:number): string {
    return description.substring(0,limit);
  }

}
