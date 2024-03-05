import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeroTexto'
})
export class NumeroTextoPipe implements PipeTransform {

  transform(value: string): string {

    const numericValue = parseInt(value);

    if (numericValue > 200) {
      return 'high';
    } else if (numericValue >= 100 && numericValue <= 200) {
      return 'normal';
    } else {
      return 'low';
    }
  }

}
