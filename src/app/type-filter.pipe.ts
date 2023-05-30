import { Pipe, PipeTransform } from '@angular/core';

interface Content {
  title: string;
  type?: string;
}

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(content: Content[], type?: string): Content[] {
    if (type) {
      return content.filter((item) => item.type === type);
    } else {
      return content.filter((item) => !item.type);
    }
  }
  
}
