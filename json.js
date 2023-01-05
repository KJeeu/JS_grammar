//JSON (JavaScript Object Notation)

// 1. Object -> JSON
//stringify
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'pink',
    birth: new Date(),
    size : null,
    jump : () => {
        console.log(`jump!`);
    }
};

json = JSON.stringify(rabbit); //데이터만 가져오고 함수(jump)는 가져오지 않음
console.log(json);

json = JSON.stringify(rabbit, ['name']); //이름만 전달
console.log(json);

json = JSON.stringify(rabbit, (key,value) => {
    return key === 'name' ? 'jeeu' : value;
})
console.log(json);


// console.clear();
// 2. JSON -> Object
//parse
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => { 
    return key === 'birth' ? new Date() : value;
});
console.log(obj);
rabbit.jump();

console.log(rabbit.birth.getDate());
console.log(obj.birth.getDate()); //string인 birth를 new Date()로 반환해서 가져오기


