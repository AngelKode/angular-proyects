interface Student{
    name : string,
    sex  : string
    age  : number
};

export default function calculateValidStudent(student : Student){
    return student.age > 21;
}

export{
    type Student
}