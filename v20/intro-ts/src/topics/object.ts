const subjectList : string[] = ["MATH", "SPANISH", "SCIENCE"];

interface Student{
    name: string,
    subjects : string[],
    phoneNumber ?: number
}

const studentOne:Student = {
    name: "JOHN",
    subjects: subjectList
}

console.table(studentOne);


export {};