const customShuffle = (array) => {
    let shuffledArray = [...array] // declaring new array and making it a deep copy of the original array
    for(let i = 0; i < shuffledArray.length - 1; i++) {
        // using the modern Fisher-Yates shuffle algorithm 
        let j = Math.floor(Math.random()*(shuffledArray.length - i) + i)
        temp = shuffledArray[i];
        shuffledArray[i] = shuffledArray[j]
        shuffledArray[j] = temp;
    }
    return shuffledArray;
}

module.exports = customShuffle;

// console.log(customShuffle([1,2,3,4,5,6]));
// console.log(customShuffle([1,2,3,4,5,6]));
// console.log(customShuffle([1,2,3,4,5,6]));
// console.log(customShuffle([1,2,3,4,5,6]));
// console.log(customShuffle([1,2,3,4,5,6]));

