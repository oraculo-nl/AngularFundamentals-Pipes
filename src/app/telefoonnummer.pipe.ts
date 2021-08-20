import { Pipe, PipeTransform } from '@angular/core';

//https://stackoverflow.com/questions/1267283/how-can-i-pad-a-value-with-leading-zeros
//With ES2017+
const zerofill = (nb: number, minLength: number) => nb.toString().padStart(minLength, '0')

@Pipe({
  name: 'telefoonnummer'
})
export class TelefoonnummerPipe implements PipeTransform {


  transform(value: number, ...args: string[]): string {
    let telnr = zerofill(value, 10);
    if (args[0] == "nationaal") {
      return telnr.substr(0, 3) + " - " + telnr.substr(3, 3) + " " + telnr.substr(6, 2) + " " + telnr.substr(8, 2);
    } else if (args[0] == "internationaal") {
      return "+31 " + telnr.substr(1, 2) + " " + telnr.substr(3, 3) + " " + telnr.substr(6, 2) + " " + telnr.substr(8, 2);
    } else {
      return telnr;
    }
  }

}
