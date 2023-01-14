/*
    alert : 알려줌
    prompt : 입력받음
    confirm : 확인받음
*/

// const name1 = prompt("이름을 입력하세요");
// const name2 = prompt("이름을 입력하세요", "jeeu");
// alert(`환영합니다, ${name1}님`);

const isAdult = confirm("당신은 성인입니까?");
console.log(isAdult);

/*
    단점
    - 스크립트 일시 정지
    - 스타일링x (그래서 모달창을 쓰나 빠르게 쓸 수 있어서 씀)
*/