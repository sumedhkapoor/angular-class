import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../entities/product.entity';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(value: IProduct[], search: string): IProduct[] {
    if (search == undefined)  {
      return value;
    }
    return value.filter (product => product.Title.toLowerCase().includes(search.toLowerCase()));

  }

}
