// inheritance in js

class Website {
    constructor (name, age) {
      this.domain = 'scorprog.net';
      this.loadbalancer = 'nginx';
      this.name = name;
      this.age = age;
    }
  
    // class methods
    firstpage () {
      console.log(`Scorporg Inc by ${this.name}`);
    }
  
    // including a getter
    get domainName () {
      return this.domain
    }
  
    // including a setter
    set setDomain (domainame) {
      this.domain = domainame;
    }
}


class SecondWebsite extends Website{
    constructor(name, age){
        // super method denotes the parent class
        super(name, age)
        this.accessor = "mwendwa"
        this.domain = "mwendwa.com"
        this.accessTime = 25  
    }

    access() {
        let outputString = `${this.domain} has been accessed`
        return outputString
    }

    firstpage(){
        super.firstpage();
        console.log("First page has been modified")
    }

    get getAccessorName() {
        console.log(`${this.accessor} and is ${this.age} years old`)
    }

    set setAccessorName(nameAccessor){
        this.accessor = nameAccessor;
    }
}


let accessed =  new SecondWebsite('somebody', 56);
console.log(accessed.access());
accessed.firstpage();
let firstSite = new Website("Antony");
firstSite.firstpage();
accessed.getAccessorName;
