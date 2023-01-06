const user = {
    name : "jeeu",
    age : 30
}

//1. Object.assign() : 객체 복제
// const clone = user; 객체 자체가 들어간 것이 아닌 객체가 저장된 메모리 주소(객체에 대한 참조값)이 저장됨
const clone = Object.assign({}, user);
const clone2 = Object.assign({gender:'m'}, user);
//Object.assign(a,b,c); b,c를 a에 합치기

console.log(clone);
console.log(clone2);

//2. Object.keys() : 키 배열 반환
console.log(Object.keys(user));

//3. Object.values() : 값 배열 반환
console.log(Object.values(user));

//4. Object.entries() : 키/값 묶음 배열 반환
const test = Object.entries(user);
console.log(test);

//5. Object.fromEntries() : 키/값 배열-> 객체로
console.log(Object.fromEntries(test));

//6. 
