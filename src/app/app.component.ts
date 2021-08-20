import { Component } from '@angular/core';
import { TelefoonnummerPipe } from './telefoonnummer.pipe';


class Car {
  speed: number = 0;
  brand: string = "";
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularFundamentals-Pipes';
  birthday = new Date(1988, 1, 15); // April 15, 1988 -- since month parameter is zero-based
  car = new Car();
}
