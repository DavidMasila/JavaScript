//using a generator to control an infinite loop

function*  idGenerator() {
    let id = 1;

    while(true){
        yield id;
        id++;
    }
}

const genID = idGenerator();
console.log(genID.next())
console.log(genID.next())
console.log(genID.next())
console.log(genID.next())
console.log(genID.next())