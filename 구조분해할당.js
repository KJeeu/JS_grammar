let users = ['mike', 'tom', 'jane']
let [user1, user2, user3] = users;

//let user1 - users[0]

console.log(user1);
console.log(user3);

let str = "mike-tom-jane";
let [str1, str2, str3] = str.split('-');

console.log(str1);
console.log(str3);

//기본값
// let [a,b,c] = [1,2];  c=undefined
let [a=3, b=5, c=7] = [1,2];
console.log(a);
console.log(b);
console.log(c);

//일부 반환값 무시
let [test1, ,test2] = ['1', '2', '3', '4'];
console.log(test1);
console.log(test2);

//바꿔치기
a = 1;
b = 9;

//기존
// let c = a;
// a = b;
// b = c;

//배열 구조 분해
[a, b] = [b, a]
console.log(a);

//객체 구조 분해
let user = {name: 'jeeu', age:33};
let {name, age} = user;
//let name = user.name;
//let age = user.age;
console.log(name);
console.log(age);

//새로운 변수 이름 할당
let {name: userName, age:userAge} = user;
console.log(userName);

//기본값
let {gender = 'male'} = user;
console.log(gender);