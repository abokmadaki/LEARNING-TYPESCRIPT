// Working with modules
export class Point {
    constructor(private x?: number, private y?: number) {
    } 

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
    // Use case 2
    // getter
    get X() {
        return this.x;
    }
    // setX 
    // setter
    set X(value: number) {
        if (value < 0) {
            throw new Error('Value cannot be less than 0')
        }
    }
}
