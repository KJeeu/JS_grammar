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

//-----------------------------
//class는 ES6에 추가된 스펙
//기존
const User1 = function (name, age) {
    this.name = name;
    this.age = age;
    this.showName = function () {
        console.log(this.name);
    };
};

const hee = new User1("hee", 30);

//class
class User2 {
    constructor(name, age){ //객체를 만들어주는 생성자 메서드
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name);
    }
}

const tom = new User2("tom", 25);

//메소드 오버라이딩
//동일한 명 덮어씌우기 됨
{
    class Car {
        constructor(color){
            this.color = color;
            this.wheels = 4;
        }
        stop(){
            console.log("stop!");
        }
    }

    class Bmw extends Car {
        constructor(color){
            super(color); //부모 실행 자식은 {}빈 객체가 만들어지고 this할당 단계를 건너뜀
            this.navigation = 1;
        }
        stop(){
            super.stop(); //부모 stop메서드 사용
            console.log("off");
        }
    }

    const z4 = new Bmw("blue");
    console.log(z4.stop());
    console.log(z4.color);
}
//자식클래스에서 constructor가 없어도 작동되는데
/*constructor(...args){
    super(...args);
}
있는 것처럼 행동
자식생성자는 무조건 부모생성자를 호출해야함
*/