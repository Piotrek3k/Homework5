const getArrayIntersection = (array1, array2) => {
    // function to find common values in two arrays
    const newArray = []
    for (let i = 0; i < array1.length; i++){    // if array2 includes given values from array1 it is pushed to newArray
        if(array2.includes(array1[i])){
            newArray.push(array1[i])
        }
    }
    const setOfCommonValues = new Set(newArray) // removing duplicates
    return Array.from(setOfCommonValues)
}

const getArrayUnion = (array1, array2) => {
    // function to find unique values in two arrays

    // const newArray = array1.concat(array2)
    // const setOfUniqueValues = new Set(newArray) // removing duplicates
    // return Array.from(setOfUniqueValues)   

    const newArray = [] // initializng new array
    array1.forEach(element => {
        // checking for every element if it is in array2
        if(!array2.includes(element)){
            newArray.push(element)
        }
       
    });
    array2.forEach(element => {
        // checking for every element if it is in array1
        if(!array1.includes(element)){
            newArray.push(element)
        }
    })

    return newArray
}

console.log(getArrayIntersection([1,3,5,6,7,7],[2,3,4,7,8]))
console.log(getArrayUnion([1,3,5,6,7,7],[2,3,4,7,8]))