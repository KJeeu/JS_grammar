//동기, 비동기
//JS = 동기
//함수의 선언은 hoisting

console.log('1');
setTimeout(() => console.log('2'), 1000); //콜백
console.log('3');

// 동기 콜백
function printItem(print){
    print();
}
printItem(()=>console.log('hi'));

// 비동기 콜백
function printDelay(print, timeout) {
    setTimeout(print, timeout);
}
printDelay(()=> console.log('hello'), 2000);

