//callback함수 resolve : 성공한 경우 reject : 실패한 경우
const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('ok')
        reject(new Error("err..."));
    }, 3000)
});

/*  성공시 3초뒤
state : pending(대기) -> fulfilled(이행됨)
result : undefined -> result('ok')

실패시

state : pending(대기) -> rejected(거부됨)
result : undefined -> error

 */

console.log('시작');
pr
    .then(function (result) {
        console.log(result);
    })
    .catch(function (err) {
        console.log('다시 주문해주세요');
    })
    . finally(function () {
        console.log('--주문 끝--')
    });

//example
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
            res('2번 완료')
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

//프로미스체이닝
f1()
    .then((res) => f2(res))
    .then((res) => f3(res))
    .then((res) => console.log(res))
    .catch(console.log)
    . finally(() => {
        console.log("끝");
    });

//promise.all -> 시간 단축, 하나의 정보라도 누락되면 안됨
console.time("all");
Promise
    .all([f1(), f2(), f3()])
    .then((res) => {
        console.log(res);
        console.timeEnd("all");
    });

//promise.race -> 하나라도 먼저 끝나면 끝
console.time("race");
Promise
    .race([f1(), f2(), f3()])
    .then((res) => {
        console.log(res);
        console.timeEnd("race");
    });