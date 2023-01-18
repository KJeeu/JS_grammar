//Generator : 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
//제너레이터는 다른 작업을 하다가 다시 돌아와서 next()해주면 진행이 멈췄던 부분부터 이어서 실행
/*
    iterable 반복가능
    - Symbol.iterator 메서드가 있다
    - Symbol.iterator는 iterator를 반환해야함

    iterator
    - next 메서드를 가짐
    - next 메서드는 value와 done속성을 가진 객체 반환
    - 작업이 끝나면 done은 true가 됨
*/
//next(), return(), throw()
function* fn() {
    try {
        console.log(1);
        yield 1;
        console.log(2);
        yield 2;
        console.log(3);
        console.log(4);
        yield 3;
        return "finish";
    } catch (error) {
        console.log(error);
    }
}

const a = fn();
//a.next(); : yield 만나기 전까지 실행
//done:true시 끝났다는 의미

//a.return('end'); : done 속성값이 true가 됨. 끝남
//a.throw(new Error('err')) : 에러표시 뜨고 done속성값 true됨

//next()에 인수 전달
function* fn2() {
    const num1 = yield "첫번째 숫자를 입력해주세요";
    console.log(num1);

    const num2 = yield "두번째 숫자를 입력해주세요";
    console.log(num2);

    return num1 + num2;
}
const b = fn2();
b.next();
b.next(2);
b.next(4);

//yield* 이용

function* gen1(){
    yield "w";
    yield "o";
    yield "r";
    yield "r";
    yield "d";
}

function* gen2(){
    yield "Hello, ";
    yield* gen1();
    yield "!";
}

console.log(...gen2());