//함수
function printHello(){
    console.log('hello');
}
printHello();


function a(m='hello',f='hello'){
    console.log(`${m}, ${f}`);
}
a("hi"); //->hi, hello
a(); //->hello, hello

//배열
function all(...args){
    console.log(args);
}
all('a','b','c');

//return
function sum(a, b){
    return a+b;
}
const result = sum(1,2);
console.log(result);


//위의 return 간결하게 하단과 같이 수정 가능
const sum2 = (a,b) => a+b;