//배열

//1. 배열 선언
const arr1 = new Array();
const arr2 = [1,2]; //0,1 인덱스를 가진 배열 생성

//2. 인덱스
const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits.length - 1); //마지막 인덱스 가져오기

//3. 배열 안 전체 출력
//for
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//for of
for(let fruit of fruits) {
    console.log(fruit);
}

//forEach
fruits.forEach((fruit, index) => console.log(fruit, index));

//4. addtion, deletion, copy
//추가 push
fruits.push('peach');

//빼기 pop
fruits.pop();

//앞에 넣기 unshift
fruits.unshift('lemon');

//앞에 삭제 shift
fruits.shift();

//shift, unshift는 pop,push보다 느림 -> 기존의 데이터들이 움직여야하기 때문에

//5. splice(n,m)
fruits.splice(1, 1, 'strawberry')//시작인덱스, 수, 지운 위치에 추가
console.log(fruits);

//원하는 위치에 추가도 가능
const arr = ["나는", "영희", "입니다"];
arr.splice(1, 0, "대한민국", "경찰");
//["나는", "대한민국", "경찰", "영희", "입니다"]

//6. concat 
const number = ['1', '2', '3'];
const number2 = ['4','5'];
const numberTotal = number.concat(number2);
console.log(numberTotal);

//7. search (indexOf, includes)
console.log(numberTotal.indexOf('3')); //->2
console.log(numberTotal.indexOf('7')); //->-1

console.log(numberTotal.includes('7')); //->flase

//lastIndexOf
numberTotal.push('1');
console.log(numberTotal.indexOf('1')); //-> 0 (첫번째 해당 인덱스)
console.log(numberTotal.lastIndexOf('1')); //->5 (마지막 해당 인덱스)

//Array.isArray() : 배열 여부
let user = {
    name : "jeeu",
    age : 30,
};

let userList = ["hee", "tom", "jane"];

console.log(typeof user); //object
console.log(typeof userList); //object

//객체, 배열 구분
console.log(Array.isArray(user)); //false
console.log(Array.isArray(userList)); //true

//sort() : 배열 재정렬
let test = [1,3,5,4,2];
test.sort();
console.log(test);

test = [27, 8, 5, 13];
test.sort();
console.log(test); // [13, 27, 5, 8]

test.sort((a,b) => a-b); //오름차순
console.log(test); //[5, 8, 13, 27]
// 8, 27, 5, 13
// 5, 8, 27, 13
// 5, 8, 13, 27

test.sort((a,b) =>b-a); //내림차순

//굳이 위의 번거로운 방식 대신 Lodash 라이브러리 사용
//_.sortBy(test);
