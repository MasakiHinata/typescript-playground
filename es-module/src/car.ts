import { Wheel } from './wheel.js'
export class Car {
    constructor(public wheel: Wheel){}

    status(): String {
        return `This is a car. [wheel: ${this.wheel.diamiter}]`
    }
}