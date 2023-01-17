// "" '' ``
//`` 여러줄
let test = `오늘은 맑고 화창한
날씨가 계속 되겠습니다.
내일은 비소식이 있겠습니다.`;

console.log(test);

test = '오늘은 맑고 화창한 \n날씨가 계속 되겠습니다';

console.log(test);

//length : 문자열 길이
test = '안녕하세요';
console.log(test.length);

//특정 위치 접근
console.log(test[2]);

test = "Hi guys. Nice to meet you";
//toUpperCase() : 모두 대문자
console.log(test.toUpperCase());

//toLowerCase() : 모두 소문자
console.log(test.toLowerCase());

//a.indexOf('') :문자의 index알려줌
console.log(test.indexOf('Nice'));
console.log(test.indexOf('man')); //-1

//a.slice(n, m) : n부터 m까지 문자열 반환
// m: 없으면 문자열 끝까지 / 양수면 그 숫자까지 / 음수면 끝에서부터 셈
test = "abcdefg";
console.log(test.slice(2));
console.log(test.slice(0,5));
console.log(test.slice(2,-2));

//a.substring(n, m) : n과 m 사이 문자열 반환
//slice와 달리 n과 m을 바꿔도 동작 / 음수는 0으로 인식
console.log(test.substring(2, 5));
console.log(test.substring(5, 2));

//a.substr(n, m) : n부터 시작 m개를 가져옴
console.log(test.substr(2, 4));

//a.trim() : 앞 뒤 공백 제거
test = "  coding          ";
console.log(test.trim());

//a.repeat(n) : n번 반복
test = "hi";
console.log(test.repeat(3));

//a.includes('') : 해당 문자 여부에 따라 true / false 반환
console.log(test.includes('hi'));