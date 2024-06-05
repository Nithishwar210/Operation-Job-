class Rectangle {
    // used to Setup object
    constructor(width, height, color) { //constructor is a method run only once while class init

        this.width = width;
        this.height = height
        this.color = color;
        console.log('Rectangle is being created', this);

    };

    getArea() {
        return this.width * this.height;
    };

    printDescription() {
        console.log(`I'm a rectangle of ${this.width} x ${this.height} and I am ${this.color}`);
    }

}
const rect1 = new Rectangle(5, 3, 'red');
const rect2 = new Rectangle(10, 2, 'blue');

// console.log('rect area',rect1.getArea());
// console.log('rect2 area',rect2.getArea());

// rect1.printDescription();
// rect2.printDescription();


// Getters & Setters:

class Square {
    constructor(width) {
        this.width = width;
        this.height = width;
        this.numOfReqForArea = 0;
    };

    get area() {
        this.numOfReqForArea += 1;
        return this.width * this.height;
    };

    set area(area) {
        this.width = Math.sqrt(area);
        this.height = this.width;
    }

}


const squr = new Square(2)
// console.log(squr.area)
// squr.area = 21
// console.log(squr.area,squr.width)
// console.log(squr.numOfReqForArea );

// Does need class instance 
// Static Method:

class Square2 {

    constructor(width) {
        this.width = width;
        this.height = width;
    };

    static equals(a, b) {
        return a.width * a.height === b.width * b.height;
    };

    static isValidDimension(width,height) {
        return width === height
    };

}

let square1 = new Square2(9)
let square2 = new Square2(9)

console.log(Square2.equals(square1,square2));
console.log(Square2.isValidDimension(NaN,NaN));



