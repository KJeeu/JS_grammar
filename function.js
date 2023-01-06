// /*함수
//     한번에 한작업에 집중
//     어떤 동작인지 알 수 있게 네이밍
// */

// function printHello(){
//     console.log('hello');
// }
// printHello();


// function a(m='hello',f='hello'){
//     console.log(`${m}, ${f}`);
// }
// a("hi"); //->hi, hello
// a(); //->hello, hello

// //배열
// function all(...args){
//     console.log(args);
// }
// all('a','b','c');

// //return
// function sum(a, b){
//     return a+b;
// }
// const result = sum(1,2);
// console.log(result);


// //위의 return 간결하게 하단과 같이 수정 가능
// const sum2 = (a,b) => a+b;

// //default value
// function sayHello(name){
//     let newName = name || 'jeeu';
//     let msg = `hi, ${newName}`
//     console.log(msg);
// }

// function sayHello(name='jeeu'){
//     let msg = `hi, ${name}`
//     console.log(msg);
// }

// sayHello(); //-> hi, jeeu / or는 마지막 true반환
// sayHello('jane');

// //return
// function showError(){
//     alert('에러 발생');
//     return;
//     alert('작동하지 않음');
// }

// console.log(showError());

//생성자 함수
function Item(title, price){
    // this = {};

    this.title = title;
    this.price = price;
    this.showPrice = () => console.log(`가격은 ${price}원 입니다`);

    // return this;
}

const item1 = new Item('인형', 2000);
item1.showPrice();