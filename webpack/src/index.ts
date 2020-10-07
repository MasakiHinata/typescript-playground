import { Wheel } from './wheel'
import Car from './car'

const wheel = new Wheel(1.0);
const car = new Car(wheel);

console.log(car.status());
