//A program to show time every 3 seconds

function showTime() {
    
    //define varibale to hold current time
    console.log(new Date().toLocaleTimeString())
    
    //recurse
    setTimeout(showTime, 3000);
}

showTime();