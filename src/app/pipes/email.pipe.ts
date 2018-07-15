import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let email = '';
    const parts: String[] = value.split('@');
    if (parts.length > 1 && parts[0].length > 4) {

      for (let i = 0; i < parts[0].length - 3; i++) {
        email += 'x';
      }

      email = parts[0].substr(0, 1) + email + parts[0].substr(parts[0].length - 2, 2);
      return email + '@' + parts[1];
    }
    return value;
  }

}
