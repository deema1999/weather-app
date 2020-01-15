import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(cityName:string , name:string): boolean {
      name.toLowerCase();
      return cityName.toLowerCase().includes(name);
  }

}
