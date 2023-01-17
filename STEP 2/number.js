//toString()
let num = 10;
num.toString(); // "10"
num.toString(2); //"1010" 2진수로 나타냄

let num2 = 255;
num2.toString(16); //"ff" 16진수

//Math
Math.PI; //3.1415...원주율

//Math.ceil() : 올림
let num1 = 5.1;
console.log(Math.ceil(num1));

//Math.floor(): 내림
console.log(Math.floor(num1));

//Math.round(): 반올림
console.log(Math.round(num1)); //5
console.log(Math.round(5.5)); //6

//소수점 자릿수
let test = 30.1234;
//반올림하여 소수점 둘째자리까지 표현
//1
console.log(Math.round(test*100)/100); //30.12
//2 toFixed() 
console.log(test.toFixed(2));
//하지만 문자열을 반환하므로
Number(test.toFixed(2));

//+)
console.log(test.toFixed(0)); //30
console.log(test.toFixed(6)); //30.123400

//isNaN() :NaN인지 판단
const x = Number('x'); //NaN

console.log(x); //NaN
console.log(4); //false

//parseInt() : 문자열 > 숫자 변환
//Number와 차이점은 문자와 혼용되어있어도 동작함
//단 숫자로 시작하는 것만 숫자 변환
const margin = '10px';
console.log(parseInt(margin)); //10
console.log(Number(margin)); //NaN
console.log(parseInt('f3')); //NaN

//단 진수를 설정하면 가능
console.log(parseInt('f3', 16));

//parseFloat() : 문자열 > 소수 변환
const padding = '18.5%';
console.log(parseInt(padding)); //18
console.log(parseFloat(padding)); //18.5

//Math.random() : 0~1사이 무작위 숫자 생성
console.log(Math.random());
//1~100사이 임의의 숫자 뽑기
console.log(Math.floor(Math.random()*100)+1);
//+1을 해주는 이유는 0.00이 나왔을 때 floor로 0이 될 수 있기 때문

//Math.max() : 최댓값 
console.log(Math.max(1, 4, -5, 8, 45, 6));
//Math.min() : 최솟값
console.log(Math.min(1, 4, -5, 8, 45, 6));
//Math.abs() : 절댓값
console.log(Math.abs(-1));
//Math.pow(a,b) : 제곱
console.log(Math.pow(2, 3));
//Math.sqrt() : 제곱근
console.log(Math.sqrt(16));


