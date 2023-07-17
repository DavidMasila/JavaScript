// js classes
// constrcutor function

function Website () {
  this.domain = 'scorprog.net';
  this.loadbalancer = 'nginx';
  // constructor method
  this.firstpage = function () {
    console.log('<h1>Scorporg Inc</h1>');
  };
}

Website.prototype.transferProt = 'UDP';
const site1 = new Website();
console.log(site1.transferProt);

Website.prototype = { transferProt: 'TCP/IP' };

console.log(site1.transferProt);
const site2 = new Website();
console.log(site2.transferProt);

// using classes
class Website2 {
  constructor (name) {
    this.domain = 'scorprog.net';
    this.loadbalancer = 'nginx';
    this.name = name;
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

const site3 = new Website2('Masila');
site3.firstpage();
console.log(site3.domainName);
site3.setDomain = 'mwendwa.net';
console.log(site3.domainName);
