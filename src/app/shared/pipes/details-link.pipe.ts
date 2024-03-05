import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detailsLink'
})
export class DetailsLinkPipe implements PipeTransform {

  transform(url: string): string {
    const id = url.match(/(\d+)(\/?)$/)?.[1];
    return id || '';
  }

}
