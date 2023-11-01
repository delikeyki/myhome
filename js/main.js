"use strict";

import {numbers, students, fruits} from "./data.js";

// array API 들 : map, some, every, filter, reduce 
// map 메서드 : 결과물을 새로운 배열로 리턴함 
const result = numbers.map(function(number){
    return number * 2;
}); // 같은문법 const result = numbers.map((number) => number * 2);

console.log(result);

const koreanjumsu = students.map(function(kjumsu){
    return kjumsu.name;
});

console.log(koreanjumsu);


// some 메서드 : 요소들을 순회하면서 참인 것이 1개라도 있으면 true 반환, true인 상태까지 오면 거기서 실행 종료 
console.log("과일중에 배가 있습니까?", 
    fruits.some(function(fruit){
        return fruit === "배";
    })
);

// every 메서드 : 모든 요소가 참이어야 true 반환 
console.log("과일이 모두 배입니까?", 
    fruits.every(function(fruit){
        return fruit === "배";
    })
);

console.log("숫자가 모두 8미만입니까?", 
    numbers.every(function(num){
        return num < 8;
    })
);

// filter 메서드 
const stu60 = students.filter(function(mthjumsu){
    return mthjumsu.mathmatics >= 60;
});

console.log("수학점수가 60점 이상인 학생들이 있나요?", stu60);

console.log("수학점수가 60점 이상인 학생들의 이름은 무엇입니까?", 
    stu60.map((stuname) => stuname.name)
);

// reduce 함수 : acc(누적값), cur(현재값), idx(인덱스), src(원본 배열) 최종결과는 누적 값. 

const accResult = numbers.reduce(function(acc, cur, idx, src){
    console.log("acc:", acc, "cur:", cur, "idx:", idx, "src:", src);
    return acc + cur;
}, 0);
console.log("누적값:", accResult);


const fruitResult = fruits.reduce((acc, cur) => {
    console.log("acc:", acc, "cur:", cur);
    if(acc.includes(cur) === false) {
        acc.push(cur);
    }
    return acc;
}, []);

console.log(fruitResult);