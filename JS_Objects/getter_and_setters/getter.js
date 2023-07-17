// Accessor Property
//getters are used to access the properties of an object

const Students = {
    //data property

    studentName: "Masila David",
    studentID: 45212897,
    studentTeacher: "Mokebo",

    //getter accessor property
    get getName() {
        return this.studentName;
    },

    get getID() {
        return this.studentID;
    },

    get getTeacher() {
        return this.studentTeacher
    }
}

//accessing directly
console.log(Students.studentName);
//accessing using the getter accessor
console.log(Students.getName);
console.log(Students.getTecher);
console.log(Students.studentTeacher);