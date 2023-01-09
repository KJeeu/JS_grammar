//나머지 매개변수, 전개 구문

/*arguments
- 함수로 넘어 온 모든 인수에 접근
- 함수내에서 이용 가능한 지역 변수
- length / index
- Array 형태의 객체
- 배열의 내장 메서드 없음 (forEach, map)
*/
function showName(name){
    console.log(arguments.length);
    console.log(arguments[0]);
}

showName('Mike', 'Tom');

//es6 사용 환경일시 나머지 매개변수 사용
//정해지지 않은 인수갯수를 배열로 나타냄 ...배열이름
function showName(...names){
    console.log(names);
}

showName();
showName('Mike');
showName('Mike', 'Tom');

//전달 받은 모든 수 더하기
function add(...numbers) {
    // let result = numbers.reduce((prev, cur) => prev + cur)
    let result = 0;
    numbers.forEach((num) => (result += num));
    console.log(result);
}

add(1,2,3,4,5,6,7,8,9,10);

//user객체를 만들어 주는 생성자 함수 만들기
//나머지 매개 변수는 항상 마지막에
//Array 형태
function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const user1 = new User('jeeu', 33, 'html');
const user2 = new User('Mike', 30, 'JS', 'React');
const user3 = new User('Tom', 28, 'English');

console.log(user1);
console.log(user2);

//전개 구문 : 배열
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = [0, ...arr1, ...arr2, 7, 8];
console.log(result);

//전개 구문: 복제
let user4 = {name:'mike', age: 30};
let user5 = {...user4};

user5.name = 'jeeu'
console.log(user4.name);
console.log(user5.name);

//arr3 = [4,5,6,1,2,3]
let arr3 = [1,2,3];
let arr4 = [4,5,6];

// arr4.reverse().forEach((num) => {
//     arr3.unshift(num);
// });

// console.log(arr3);

//-> 전개구문

arr3 = [...arr4, ...arr3];
console.log(arr3);

//example
{
    let user = {name : "jeeu"};
    let age = {age : 20};
    let fe = ["js", "react"];
    let lang = ["korean", "english"];

    user = Object.assign({}, user, age, {
        skills: []
    });

    fe.forEach((item) => {
        user.skills.push(item);
    });
    lang.forEach((item) => {
        user.skills.push(item);
    });

    console.log(user);
}

// -> 전개구문
{
    let user = {name : "jeeu"};
    let age = {age : 20};
    let fe = ["js", "react"];
    let lang = ["korean", "english"];

    user = {
        ...user,
        ...age,
        skills: [...fe, ...lang]
    };

    console.log(user);
}