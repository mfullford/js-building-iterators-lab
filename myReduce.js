// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback) {
	var newReduce = [];
	for(let i=0; i<arr.length; i++){
		var newValue=callback(arr[i], i, arr); 
		newValue.push(newReduce);
	}
	return newReduce;

//start with [0]
// does some sort of assigned function
// goes to [1]
// does the same assigned function
// repeat until at the end of the array
// return one value


}


// totally stuck on this one

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/




// export this function (you can ignore this for now)
module.exports = myReduce;
