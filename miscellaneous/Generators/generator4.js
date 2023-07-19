function* getName(firstName, lastName){
    const fullName = firstName + " " + lastName;
    yield fullName;

    let greeting = `${firstName}, Hellow there`;
    yield greeting;

    console.log("Last part of the yield");
    yield 1;
}

const yeildFunc = getName("david","mwendwa");
console.log(yeildFunc.next());
console.log(yeildFunc.next());
console.log(yeildFunc.next());
// console.log(yeildFunc.next());
