import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'loginOr'
})
export class LoginPipe implements PipeTransform {
  transform(value: string) {
    if (value){
      return value;
    }
    else {
      value = 'Profile';
      return value;
    }
  }
}
