const chunkArray = (array, chunkSize) => {
    // function to divide the array into chunks of provided chunk size
    const newArray = []

    for(i=0; i < array.length; i+= chunkSize) {
        newArray.push(array.slice(i,i+chunkSize))   // appending the chunk to the new array, the chunk is made of slicing the original array
    }
    return newArray
}
module.exports = chunkArray;
//export default chunkArray
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const chunkSize = 1;

// console.log(JSON.stringify(chunkArray(array, chunkSize)));