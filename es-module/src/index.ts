import { Wheel } from './wheel.js'
import Car from './car.js'

const wheel = new Wheel(1.0);
const car = new Car(wheel);

console.log(car.status());

// 別名でインポート
import { Wheel as AliasWheel } from './alias_wheel.js'
const aliasWheel = new AliasWheel("alias wheel");
console.log(aliasWheel.infomation());

// すべてインポート
import * as Persons from './person.js'
const alice = new Persons.Student("literature", "alice")
console.log(alice.greet())