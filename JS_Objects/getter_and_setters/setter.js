//using setter accesser property
//setters are used to set object properties i.e to change the values of the object

const Students = {
    //set object properties

    studentName: "Masila",
    studentSubjects: ["Kiswahili","Biology"],
    studentID: 895623147,

    get getName(){
        return this.studentName;
    },

    get getID(){
        return this.studentID;
    },

    set setName(name){
        this.studentName = name
    },

    set setID(ID){
        try{
            let newID = parseInt(ID)
            if(isNaN(ID)) {
                throw new Error ("Please provide a number");
            } else {
                this.studentID = newID
            }
        } catch (e) {
            console.log(e + "")
        }
    },
}

//getting and setting the studentID
console.log(Students.getID);
Students.setID = 13272;
console.log(Students.getID);

//getting and  setting the studentName
console.log(Students.getName);
Students.setName = "David";
console.log(Students.getName);
