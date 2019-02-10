import { Component } from '@angular/core';
import { Cars, Car } from './car/car.model';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public cars: Car[] = [
    new Car("Ford", "12.12.12", "Focus", false, 1),
    new Car("Audi", "08.12.08", "A4", true, 2),
    new Car("BMV", "08.12.08", "M5", false, 3)
  ];

  onAdd(car: Car) {
    this.cars.push(car);
  }

  onDelete(car: Car) {
    this.cars = this.cars.filter( c => c.id !== car.id );
  }
}
