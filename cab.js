//call, apply, bind : 함수 호출 방식과 관계없이 this지정 가능

const mike = {
    name: "mike"
};

const tom = {
    name: "tom"
};

//1. call
//call메서드는 모든 함수에서 사용할 수 있으며 this를 특정값으로 지정할 수 있음
function show() {
    console.log(this.name);
}

show(); //this가 window를 가리킴
show.call(mike);

function update(birth, occ){
    this.birth = birth;
    this.occ = occ;
};

update.call(mike, 1999, "singer");
console.log(mike);

//2. apply
//함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같음
//call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만 apply는 매개변수를 배열로 받음
update.apply(tom, [2002, "teacher"]);
console.log(tom);

const num = [3, 19, 1, 6, 4];

const minNum = Math.min.apply(0, num);
const maxNum = Math.max.apply(null, num);
// = Math.max.apply(null, [3, 19, 1, 6, 4])

//call
const callMaxNum = Math.max.call(null, ...num);
// = Math.max.call(null, 3, 19, 1, 6, 4)

console.log(minNum);
console.log(maxNum);
console.log(callMaxNum);

//3. bind
//this값을 바꿀 수 있음

const updateMike = update.bind(mike);
updateMike(1980, "police");

console.log(mike);

//example
const user = {
    name:"jeeu",
    showName: function(){
        console.log(`hello ${this.name}!`);
    }
}

user.showName();

let fn = user.showName;

fn(); //this 없음
fn.call(user);
fn.apply(user);

let bFn = fn.bind(user);
bFn();

