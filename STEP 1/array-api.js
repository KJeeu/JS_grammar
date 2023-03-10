// Q1. array -> string >> join()
{
    const fruits = ['apple', 'banana', 'orange'];

    const result = fruits.join('!'); //๊ตฌ๋ถ์ !
    console.log(result);
}

// Q2. string -> array >> split()
{
    const fruits = '๐,๐ฅ,๐,๐';

    const result = fruits.split(',');
    console.log(result);
}

// Q3. ์์๋ฅผ ๊ฑฐ๊พธ๋ก >> reverse()
{
    const array = [1,2,3,4,5];

    const result = array.reverse();
    console.log(result);
    console.log(array); //๊ธฐ์กด ๋ณ์ ๊ฐ๋ ๋ฐ๋
}

// Q4. ์ฒซ๋ฒ์งธ, ๋๋ฒ์งธ๋ฅผ ์ ์ธํ ๋ฐฐ์ด ์์ฑ >> splice() : ๋ฐฐ์ด ์์ฒด ์์ 
{
    const array = [1,2,3,4,5];
    const result = array.splice(0, 2);
    console.log(result); //1,2
    console.log(array); //3,4,5
}

// Q4-1. ์ฒซ๋ฒ์งธ, ๋๋ฒ์งธ๋ฅผ ์ ์ธํ '์๋ก์ด' ๋ฐฐ์ด ์์ฑ >> slice() : ๋ฐฐ์ด์์ ์ํ๋ ๋ถ๋ถ๋ง ๊ฐ์ ธ์ด
{
    const array = [1,2,3,4,5];
    const result = array.slice(2, 5);
    console.log(array); // 1,2,3,4,5
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

// Q5. score = 90์ธ student ์ฐพ๊ธฐ >> find()
{
    // const result = students.find(function(student){
    //     return student.score === 90;
    // });
    const result = students.find((student) => student.score === 90);

    console.log(result);
}

// Q6. enrolled = true์ธ ํ์ ๋ฐฐ์ด๋ก ์์ฑ >> filter()
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

//find(), filter() ์ฐจ์ด : find()๋ ์ต์ด์ 1๊ฐ๋ง ๋ฐํํ์ง๋ง filter()๋ ํด๋นํ๋ ๋ชจ๋  true๊ฐ ๋ฐํ
{const test = [1,2,3,4,5,6];

const result = test.filter((item) => {
   return item % 2 === 0; 
});

console.log(result);
}

// Q7. ์ ์๋ง ๋ฐฐ์ด๋ก ์์ฑ >> map()
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. ์ ์๊ฐ 50์  ์ดํ์ธ ํ์ ์ฌ๋ถ >> some (์กฐ๊ฑด์ ์ถฉ์กฑํ๋ค๋ฉด true) / every (๋ชจ๋  ์์๊ฐ ์กฐ๊ฑด์ ์ถฉ์กฑํด์ผ true)
{
    const result = students.some((student) => student.score < 50 );
    console.log(result);

    const result2 = students.every((student) => student.score < 50 );
    console.log(result2);
}


// Q9. ํ๊ท  ์ ์ >>reduce() ๊ฐ ๋์  >> reduce
//์ธ์๋ก ํจ์๋ฅผ ๋ฐ์
//(๋์  ๊ณ์ฐ๊ฐ, ํ์ฌ๊ฐ) => {return ๊ณ์ฐ๊ฐ};
{
    // const result = students.reduce((prev, curr) => prev+curr.score, 0);
    const result = students.reduce((prev, curr) => {
        console.log('-----');
        console.log(prev);
        console.log(curr);
        return prev+curr.score;
    }, 0); //์ด๊ธฐ๊ฐ 0
    console.log(result / students.length);
}

// Q10. ํ์๋ค์ ๋ชจ๋  ์ ์๋ฅผ ํ๋์ string์ผ๋ก ๋ณํ
{
    const result = students
        .map((student) => student.score)
        .join();
    console.log(result);
}
// Q10-1. ์ค๋ฆ์ฐจ์์ผ๋ก ์ ๋ ฌ
{
    const result = students
        .map((student) => student.score)
        .sort((a,b) => a-b)
        .join();
        console.log(result);
}
