function one(call_two){
    console.log("Step 1 complete. Please call step two");
    call_two();
}

function two(){
    console.log("Step 2");
}

one(two);