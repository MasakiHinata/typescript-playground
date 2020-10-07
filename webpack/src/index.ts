import { Wheel } from './wheel.js'
import Car from './car.js'

const wheel = new Wheel(1.0);
const car = new Car(wheel);

console.log(car.status());
