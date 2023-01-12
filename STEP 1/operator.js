//1. String
console.log(` 1+2=${1+2}`);

//2. Number
console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(5 / 2);
console.log(5 % 2);
console.log(2 ** 3);

//3. Increment and decrement (++, --)
let counter = 2;
console.log(counter); //->2
console.log(++counter); //->3
console.log(counter++); //->3
console.log(counter); //->4

//4. Assignment Operators (할당연산자)
let x = 2;
let y = 4;
x += y; // x = x+y; 6

//5. Logical operators (논리연산자) ||(or) &&(and) !(not)
const a = false;
const b = 4<2;

// || (or) 하나만 true여도 return true
console.log(`or: ${a || b || true}`); //->true
//순서대로 작동하므로 뒤로갈수록 복잡한 코드(함수 등)로 작성


// &&는 null체크할 때 유용
/* a&&b
 --------상하 같음------
 if (a != null){
     b;
 }
*/

// !(not) 반대로 바꿈
console.log(!a);

//6. Equality
const test1 = '5';
const test2 = 5;

console.log(test1 == test2); //값만 비교
console.log(test1 === test2); //값,타입 비교

//object Equality 주의
const obj1 = { age: 20};
const obj2 = { age: 20};
const obj3 = obj1;
console.log(obj1 == obj2); //->f
console.log(obj1 === obj2); //->f
console.log(obj1 === obj3); //->t

//7. if, else if, else
const test3 = 'test';
if(test3 === 'test'){
    console.log("yes");
} else if (test3 === 'no'){
    console.log("no");
} else {
    console.log("final")
}

//8. Ternary operator (삼항연산자) ( condition ? value1 : value2)
console.log(test3 === 'test'?"yes":"no");
//간단할 때만 사용

//9. switch
const test4 = 'test';
switch (test4) {
    case 'test':
        console.log("test");
        break;
    case 'test2':
    case 'test3':
        console.log("...");
        break;
    default:
        console.log("default");
        break;
}

//10. loops
let test5 = 3;
while (test5 > 0) {
    console.log(`while: ${test5}`);
    test5--;
}

//11. do-while 먼저 실행 후 조건 참거짓여부 판정
do{
    console.log(`do while: ${test5}`)
    test5--;
} while(test5 > 0);

//12. for loop for(begin;condition;step)
for (i=3; i>0; i--){
    console.log(i);
} 