export const numbers = [1,2,3,4,5,6,7];

export class Student {
    constructor(name, korean, english, mathmatics) {
        this.name = name;
        this.korean = korean;
        this.english = english;
        this.mathmatics = mathmatics;
    }
}

export const student1 = new Student("홍길동", 80, 90, 100);
export const student2 = new Student("둘리", 50, 60, 30);
export const student3 = new Student("도우너", 90, 50, 70);

export const students = [student1, student2, student3];

export const fruits = ["사과", "딸기", "배", "참외", "딸기", "수박"];