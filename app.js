// Refactoring code using rest operator and an arrow function.
const filterOutOdds = (...nums) => nums.filter(val => val % 2 === 0)

// findMin
const findMin = (...args) => Math.min(...args)

// mergeObjects
const mergeObjects = (obj, obj2) => ({...obj, ...obj2});

// doubleAndReturnArgs
const doubleAndReturnArgs = (array, ...args) => {
    return [...array, ...args.map(num => num * 2)]
}

// Slice and Dice!
// 1.
const removeRandom = items => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)]
}

// 2.
const extend = (array1, array2) => ([...array1, ...array2]);

// 3.
const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

// 4. 
const removeKey = (obj, key) => {
    let finalObj = {...obj};
    delete finalObj[key]
    return finalObj;
}

// 5.
const combine = (obj1, obj2) => ({...obj1, ...obj2});

// 6.
const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}