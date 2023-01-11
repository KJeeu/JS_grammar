async function getName(){
    return "jeeu";
}
//promise 반환

getName().then(name => {
    console.log(name);
})

//await : promise가 모두 처리된 뒤 실행
//async함수 내에서만 사용 가능

function getId(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(id);
        }, 1000);
    });
}

async function showId(){
    const result = await getId("tom");
    console.log(result);
}

console.log("시작");
showId();

//example (promise보다 가독성 좋게 수정)
const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('1번 완료')
        }, 1000)
    });
};

const f2 = message => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            // res('2번 완료')
            rej(new Error("error.."));
        }, 3000)
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('3번 완료')
        }, 2000)
    });
};

console.clear();
console.log('시작')
async function order(){
    try {
        const result1 = await f1();
        const result2 = await f2(result1);
        const result3 = await f3(result2);
        console.log(result3)
    } catch (error) {
        console.log(error);
    }
    console.log('종료')
}
order();