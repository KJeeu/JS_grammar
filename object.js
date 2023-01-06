//object = {key : value};
/*
    접근
        test.name
        test['name']
    추가
        test.gender = 'm';
        test['gender'] = 'm';
    삭제
        delete test.gender;
    프로퍼티 존재 여부 확인
        'gender' in test; //false
*/
const jeeu = {};
const jeeu2 = new Object();

const test = {name: 'jeeu', age:20};
console.log(test);

test.hasJob = true;
console.log(test);

delete test.hasJob;
console.log(test);


console.log(test.name);
console.log(test['name']); //정확히 어떤 key가 필요한지 모를 때 사용(예를 들어 사용자에게 input받는 상황)


const person1 = {name : 'a', age: 1};
const person2 = {name : 'b', age: 2};
const person3 = new Person('c', 3);
console.log(person3);

function Person(name, age){
    this.name = name;
    this.age = age;    
}

// key in obj?
console.log('name' in test); //-> true
console.log('random' in test); //-?false

//for..in vs for..of
for (key in test) {
    console.log(key);
}

const array = [1,2,3,4,5];
for (key of array){
    console.log(key);
}

//for...in
const Mike = {
    name: "mike",
    age: 30
};

for (i in Mike){
    console.log(Mike[i]);
}

//cloning
const user = {name:'user', age: 33};
const user2 = user;

user2.name = 'coder';
console.log(user);

//copy
const user3 = Object.assign({}, user);
console.log(user3);

//example
const ex1 = {color:'red'};
const ex2 = {color:'blue', size:'big'};
const mixed = Object.assign({}, ex1, ex2); //-> blue, big (뒤가 앞을 덮음)
console.log(mixed);

//method
const superman = {
    name : 'mini',
    age : 33,
    fly(){ //method
        console.log('날라갑니다');
    }
}