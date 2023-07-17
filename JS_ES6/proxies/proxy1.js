// used to wrap objects and redefine various operations into the object
// they allow adding of custom behavior to a function or object 
// new Proxy(target, handler)
// when an empty handler is passed in the proxy 

let student1 = {
    age: 45,
    name: 'felix'
}

const handler = {
    get: function(obj, prop) {
        return obj[prop] ? obj[prop] :'property does not exits';
    },

    set : function(obj, prop, value){
        return value ? obj[prop] = value : "Please provide a value"
    }
}

const proxy = new Proxy(student1, handler)
console.log(proxy.age);
console.log(proxy.gender);
proxy.gender = 'male';
console.log(proxy.gender);
console.log(proxy)