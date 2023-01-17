//자바스크립트는 어휘적 환경을 가짐
//closure : 함수와 렉시컬 환경의 조합
//          함수가 생성될 당시의 외부 변수를 기억
//          생성 이후에도 계속 접근 가능
//외부 함수의 실행이 끝난 이후에도 내부 함수가 외부함수의 변수에 접근 가능

function makeCount() {
    let num = 0; //은닉화

    return function(){
        return num++;
    };
}

let counter = makeCount();

console.log(counter());
console.log(counter());
console.log(counter());
