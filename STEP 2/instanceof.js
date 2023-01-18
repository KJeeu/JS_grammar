//생성자 함수가 새로운 객체를 만들어낼 때 그 객체는 생성자의 instance라고 불림
//상속
const car = {
    wheels : 4,
    drive() {
        console.log("drive..");
    }
};

const bmw = {
    color : "red",
    navigator : 1
};

const ben2 = {
    color : "black"
};

const aud1 = {
    color : "blue"
};

bmw.__proto__ = car; //bmw는 car의 상속을 받음
ben2.__proto__ = car;
aud1.__proto__ = car;

const x5 = {
    color : "white",
    name : "x5"
};

x5.__proto__ = bmw;

//car > bmw > x5 차례로 상속 : prototype chain

//--------
{
    const bmw = function (color) {
        this.color = color;
    };

    // bmw.prototype.wheels = 4;
    // bmw.prototype.drive = function(){
    //     console.log("drive..");
    // };

    bmw.prototype = {
        constructor: bmw,
        wheels : 4,
        drive(){
            console.log("drive..");
        }
    };

    const x5 = new bmw("red");
    const z4 = new bmw("blue");


    console.log(z4 instanceof bmw); //bmw의 상속을 받은 z4
    console.log(z4.constructor === bmw); //z4의 생성자는 bmw 
} 

//color 수정 x
const bmw2 = function (color){
    const c = color;
    this.getColor = function () {
        console.log(c);
    };
};

const x10 = new bmw2("red");

