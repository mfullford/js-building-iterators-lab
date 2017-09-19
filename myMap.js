// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {
	var newMyMap = [];
	for(let i=0; i<arr.length; i++) {
		var newValue=callback(arr[i], i, arr); 
		newMyMap.push(newValue);
	}
	return newMyMap;

}


//var new_array = arr.map(function callback(arr[i], i, arr) {
    // Return element for new_array }

// Create a function myMap which implements Array.prototype.map
/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/


 // What are our inputs? Input is the array and the secondary function is the callback
 // What is our output? Implementation of Array.prototype.forEach
// What happens on each loop? Executes the provided function for each element in an array - forEach function in this case
// What does the callback function do?  forEach -> list elements of the array in ascending order
// What gets passed into our callback function? ?????
// Where does it come from? 
// How do we know what to name it?




// export this function (you can ignore this for now)
module.exports = myMap;
