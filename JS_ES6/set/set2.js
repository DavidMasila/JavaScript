// mathematical operations with sets

// 1. Union
const set1 = new Set(['masila', 1, 'Triglycerides', 45]);
const set2 = new Set(['Prostraglandin', 'Citric Acid Cycle', 'masila', 89]);

function unionSet (setA, SetB) {
  const newUnionSet = new Set(setA);

  for (const i of SetB) {
    newUnionSet.add(i);
  }
  return newUnionSet;
}

console.log(unionSet(set1, set2));

// 2. Difference
function diffrenceSet (setA, setB) {
  const diffUnion = new Set();

  for (const i of setA) {
    if (!setB.has(i)) {
      diffUnion.add(i);
    }
  }

  return diffUnion;
}

console.log(diffrenceSet(set2, set1));

// 3. Intersection
function intersectSet (setA, setB) {
  const interSet = new Set();
  for (const i of setA) {
    for (const j of setB) {
      if (i === j) {
        interSet.add(i);
      }
    }
  }

  return interSet;
}

console.log(intersectSet(set1, set2));
