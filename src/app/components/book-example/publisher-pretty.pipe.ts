import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'publisherPretty'
})
export class PublisherPrettyPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const publisher = value.split('&').map( p => p.trim() );
    let newValue = ''
    for (const p in publisher) {
      newValue += `<< ${publisher[p]} >> `
    }
    return newValue;
  }

}