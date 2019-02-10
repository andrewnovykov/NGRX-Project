import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Car } from '../car/car.model';
import * as moment from 'moment';


@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {

  carName = '';
  carModel = '';

  @Output() addCar = new EventEmitter<Car>();

  private id: any = 2;


  constructor() { }

  onAdd() {
    if (this.carName === '' || this.carModel === '') { return; }

    this.id = ++this.id;

    const car = new Car(
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
      false,
      this.id

    );

    this.addCar.emit(car);

    this.carName = '';
    this.carModel = '';
  }

  onLoad() {

  }

  ngOnInit() {
  }



}
