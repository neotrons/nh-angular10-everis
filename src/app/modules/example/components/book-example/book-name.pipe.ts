import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettybook'
})
export class CustomNamePipe implements PipeTransform {
  transform(value: string): string {
    const newValue = `<< ${value} >>`;
    return newValue;
  }
}
