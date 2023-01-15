//심볼(Symbol) : 유일한 식별자를 만들 때 사용
//유일성 보장
const a = Symbol();

const id = Symbol('id');
const id2 = Symbol('id');
console.log(id === id2); //false
console.log(id.description); //id

const user = {
    name : 'jeeu',
    age : 20,
    [id] : 'myid'
}
console.log(Object.keys(user)); //Object.keys, Object.values, Object.entries 해도 심볼은 안 나옴

//그렇지만 Symbol을 완벽하게 숨기지는 못함
console.log(Object.getOwnPropertySymbols(user)); //심볼만 보임
console.log(Reflect.ownKeys(user)); //심볼과 객체 모두 보여줌


//쓰는 이유
//특정 위치에 원본 데이터는 건들이지 않고 속성 추가 가능

//Symbol.for() : 전역 심볼
//하나의 심볼만 보장 받음
//Symbol함수는 매번 다른 Symbol값을 생성하지만 Symbol.for메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol 공유

const test1 = Symbol.for('test');
const test2 = Symbol.for('test');
console.log(test1 === test2); //true
console.log(Symbol.keyFor(test1)); //test