// using this in objects

const getaLife = {
    firstName: "David",
    lastName:"Masila",
    nameFunc: function(){
        let fullname = this.firstName + " " + this.lastName;
        console.log(fullname);
    }
}

getaLife.nameFunc();