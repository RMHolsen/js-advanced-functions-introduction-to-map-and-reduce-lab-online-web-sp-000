// Your code here
// I CANNOT RUN TESTS ON THIS ARGH.

// MAP FUNCTIONS
const mapToNegativize = (array) => {
    let newArray = [];
    // define the new array, it doesn't automatically convert and rearrange the array
    for (let i = 0; i < array.length; i++) {
    // for block could also be a while block, basically 'run down the length of the array'
        newArray.push(array[i] * -1;)
        // multiply the value by -1 and push it to the new array
    }

    return newArray
    // don't forget to return the new array
}

const mapToNoChange = (array) => {
    return array
    // look if you want me to not change the array I'm going to return the original array
    // I don't know what to tell you
}

const mapToDouble = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * 2);
    }

    return newArray
}

const mapToSquare = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * array[i]);
    }

    return newArray
}

const reduceToTotal = (array, start) => {
    let total = [];
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }

    return total
}

const reduceToAllTrue = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (!array[i]) return false
    }

    return true
}

const reduceToAnyTrue = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) return true 
    }

    return false 
}