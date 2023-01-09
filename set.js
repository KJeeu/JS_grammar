//setTimeout : 일정 시간이 지난 후 함수 실행 (1번)
//setInterval : 일정 시간 간격으로 함수 반복 (n번)

//setTimeout
function fn(){
    console.log(3)
}
setTimeout(fn, 3000); //3s

//위의 코드는 아래와 같이 쓰기 가능
setTimeout(function(){
    console.log(4)
}, 3000);

//인수 setTimeout(함수, 시간, 인수)
function showName(name){
    console.log(name);
}

const tid = setTimeout(showName, 3000, 'jeeu');

clearTimeout(tid); //예정된 작업을 없앰

//delay = 0?
//바로 실행되지는 않음 -> 현재 실행중인 스크립트가 종료된 이후 스케줄링 함수 실행
setTimeout(() => console.log(2), 0);
console.log(1);


//setInterval
function showName(name){
    console.log(name);
}

const tid2 = setInterval(showName, 3000, 'tom');
clearInterval(tid2);


// setInterval, clearInterval
let num = 0;

function showTime(){
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
    if (num > 5){
        clearInterval(test);
    }
}

const test = setInterval(showTime, 1000);