import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length > 4) {
      return 'xxx-xxx-' + value.substr(value.length - 4, 4);
    }
    return value;
  }
}
