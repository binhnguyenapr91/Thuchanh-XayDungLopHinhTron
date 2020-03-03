let Circle = function (radius) {
    this.radius = radius;
    this.getRadius = function () {
        return radius;
    };
    this.getArea = function () {
        return this.radius*this.radius*3.14;
    }
}

let newCircle = new Circle(2);
console.log(newCircle.getRadius())
console.log(newCircle.getArea());