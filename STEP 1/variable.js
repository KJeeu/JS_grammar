// var (사용x)
// var hoisting (선언만 코드의 최상단으로 옮겨서 undefined로 변수 초기화)
// block scope가 아니기 때문에 사용하면 안됨
// *undefined : 선언은 됐지만 값은 없는 상태
console.log(name0);
var name0 = 'hi';

// let
let name1= 'hi';
console.log(name1);
name1 = 'hello';
console.log(name1);


// const (변경x ! read only)
// 보안상의 이유로 되도록 변경하지 않는 변수 사용
const name2 = 'hi';

// boolean
// false : 0, null, undefined, NaN, ''
// true : 그 외 값
const a = 3 < 1;
console.log(a);

// symbol (고유한 식별자)
const b = Symbol('test');
const b2 = Symbol('test');
console.log(b === b2); //-> false

const c = 'test';
const c2 = 'test';
console.log(c === c2); //-> true

// object
const age = { name: 'jeeu', age: 20};
console.log(age.age); //->20

// dynamic typing
// 중간에 타입이 바뀐다면 오류 발생 위험 > TS이 생긴 이유
let text = 'hi';
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); //-> 75, string

text = '7' / '5';
console.log(`value: ${text}, type: ${typeof text}`); //-> 1.4, number

