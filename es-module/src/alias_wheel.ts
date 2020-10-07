export class Wheel {
    constructor(public message: string){}

    infomation(): String {
        return `[wheel] ${this.message}`
    }
}