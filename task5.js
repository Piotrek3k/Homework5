const customShuffle = require("./task3.js")
const chunkArray = require("./task2.js")

const measureArrayPerformance = async (array, func) => {
    // function to monitor performance of function done on the given array
    const start = Date.now() // measuring time using Date.now()
    await func(array)   
    const end = Date.now()
    return(end - start)
}
const mapping = (array) => { // simple mappings function
    return array.map(x => x * 2);
};

const filtering = (array) => {  // simple filtering function
    return array.filter(x => x > 4);
};

const including = (array) => {  // simple including function
    return array.includes(-1);
};

const chunking = (array) => {   // chunking function from task2
    return chunkArray(array,10);
};
const shuffling = (array) => {  // shuffling function from task3
    return customShuffle(array);
};

const array = Array.from({ length: 10000000 }, () => Math.floor(Math.random() * 10)); // to better see performance, I use a random array of numbers from 0 to 9 and length of 10 mln

(async () => {
    console.log(await measureArrayPerformance(array, mapping));
    console.log(await measureArrayPerformance(array, filtering));
    console.log(await measureArrayPerformance(array, including));
    console.log("//////////////////////////////////////////")
    console.log(await measureArrayPerformance(array, shuffling));
    console.log(await measureArrayPerformance(array, chunking));
    
})();


// const measureArrayPerformance = async (array, func) => {
//     let start = Date.now();
//     await func(array);
//     const end = Date.now();
//     return end - start;
// };

// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const performMapping = async (array) => {
//     return array.map(x => x * 2);
// };

// (async () => {
//     console.log(await measureArrayPerformance(array, performMapping));
// })();