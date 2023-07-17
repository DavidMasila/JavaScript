// using proxies for validation
// when an empty handler is passed the proxy acts like the original object 

let student = {
    name : 'mwendwa'
}

//creating a verification handler

const hander = {

    get : function(obj, prop){

        if(obj[prop] === 'masila'){
            console.log('Name verified');
        } else {
            console.log('Unauthorised access')
        }
    },


    set : function(obj, prop, value){
        if(prop === 'name' && value === 'masila' || prop === 'name'){
            obj[prop] = value;
        } else if (prop === 'age'){
            obj[prop] = value;
        } else {
            console.log(`${prop} is not a required property`)
        }
    }
}

const newProxy = new Proxy(student, hander);
newProxy.name;
newProxy.name = "david";
newProxy.name = 'masila';
newProxy.age = 15;
newProxy.age = 25;
newProxy.career = 'Software Developer'

console.log(newProxy)