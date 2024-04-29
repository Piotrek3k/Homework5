const customFilterUnique = (array, callbackFunction) => {
    // functio to filter the array with given callback function and returning only unique values
    const filteredArray = array.filter(callbackFunction);   // filtering the array with callback function
    const setOfFilteredValues = new Set(filteredArray)  // creating a new set of values to keep only unique ones
    return(Array.from(setOfFilteredValues)) // returning in the form of array
}

let array = [1,2,5,2,3,5,11,7,0,3]
callbackFunction = value => value > 2
callbackFunction2 = function (value) {
    if(value % 2 !== 0) {
        return false
    }
    return true
}
console.log(customFilterUnique(array, callbackFunction)) // [5,3,11,7]
console.log(customFilterUnique(array, callbackFunction2))   // [2,0]