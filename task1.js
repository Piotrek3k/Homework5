const customFilterUnique = (array, callbackFunction) => {
    // function to filter the array with given callback function and returning only unique values
    let newArray = [];  // initializing new array
	array.forEach( (element) => {
        // every element is checked in the array. If element appears in the array only once, it is pushed to the new array
		let counter = 0;
		for (let i = 0; i < array.length; i++) {
			if (callbackFunction(array[i]) === callbackFunction(element)) {
				counter++;
			}
		}
		if (counter === 1) {
			newArray.push(element);
		}
	})
    return newArray;
}

let array = [1,2,5,2,3,5,11,7,0,3]
const array1 = [{
    id:1 ,
    name: "a1"
},
{
    id:2 ,
    name: "a2"
},
{
    id:3 ,
    name: "a3"
},
{
    id:2 ,
    isTrue: "false"
},
]
console.log(JSON.stringify(customFilterUnique(array, el => el)))  
console.log(JSON.stringify(customFilterUnique(array1, el => el.id)))  
