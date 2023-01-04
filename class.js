//class
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //method
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const jeeu = new Person('jeeu', 20);
console.log(jeeu);
jeeu.speak();

//getter setter
class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value){
        if (value<0){
            throw Error('음수가 될 수 없습니다');
        }
        this._age = value;
    }
}

//상속, 다양성, 재사용성
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`color: ${this.color}`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}

const rectangle = new Rectangle(20, 20, 'red');
rectangle.draw();

class Triangle extends Shape {
    draw(){
        super.draw(); //부모
        console.log("triangle");
    }
    getArea(){
        return (this.width * this.height) / 2;
    }
}

const triangle = new Triangle(20, 20, 'blue');
triangle.draw();
console.log(triangle.getArea());

//instanceOf (오브젝트, 클래스 관계)
console.log(rectangle instanceof Rectangle);