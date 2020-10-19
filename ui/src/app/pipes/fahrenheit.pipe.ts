import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahrenheit'
})
export class FahrenheitPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value * 9.0 / 5.0 + 32;
  }

}
