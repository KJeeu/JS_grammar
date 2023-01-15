//계산된 프로퍼티
let a = 'age';

// const user = {
//     name : 'jeeu',
//     age : 30
// }

const user = {
    name : 'jeeu',
    [a] : 30
}

const user2 = {
    [1+4] : 5,
    ["안녕"+"하세요"] : "hello"
}
console.log(user2);
