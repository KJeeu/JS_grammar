// Q1. array -> string >> join()
{
    const fruits = ['apple', 'banana', 'orange'];

    const result = fruits.join('!'); //구분자 !
    console.log(result);
}

// Q2. string -> array >> split()
{
    const fruits = '🍎,🥝,🍌,🍒';

    const result = fruits.split(',');
    console.log(result);
}

// Q3. 순서를 거꾸로 >> reverse()
{
    const array = [1,2,3,4,5];

    const result = array.reverse();
    console.log(result);
    console.log(array); //기존 변수 값도 바뀜
}

// Q4. 첫번째, 두번째를 제외한 배열 생성 >> splice() : 배열 자체 수정
{
    const array = [1,2,3,4,5];

    const result = array.splice(0, 2);
    console.log(result); //1,2
    console.log(array); //3,4,5
}

// Q4-1. 첫번째, 두번째를 제외한 '새로운' 배열 생성 >> slice() : 배열에서 원하는 부분만 가져옴
{
    const array = [1,2,3,4,5];

    const result = array.slice(2, 5);
    console.log(result); //3,4,5
}

class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88) 
];

// Q5. score = 90인 student 찾기 >> find()
{
    // const result = students.find(function(student){
    //     return student.score === 90;
    // });
    const result = students.find((student) => student.score === 90);

    console.log(result);
}

// Q6. enrolled = true인 학생 배열로 생성 >> filter()
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}
console.clear();
// Q7. 점수만 배열로 생성 >> map()
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. 점수가 50점 이하인 학생 여부 >> some (조건에 충족한다면 true) / every (모든 요소가 조건에 충족해야 true)
{
    const result = students.some((student) => student.score < 50 );
    console.log(result);

    const result2 = students.every((student) => student.score < 50 );
    console.log(result2);
}


// Q9. 평균 점수 >>reduce() 값 누적 >> reduce
{
    // const result = students.reduce((prev, curr) => prev+curr.score, 0);
    const result = students.reduce((prev, curr) => {
        console.log('-----');
        console.log(prev);
        console.log(curr);
        return prev+curr.score;
    }, 0);
    console.log(result / students.length);
}

// Q10. 학생들의 모든 점수를 하나의 string으로 변환
{
    const result = students
        .map((student) => student.score)
        .join();
    console.log(result);
}
// Q10-1. 오름차순으로 정렬
{
    const result = students
        .map((student) => student.score)
        .sort((a,b) => a-b)
        .join();
        console.log(result);
}
