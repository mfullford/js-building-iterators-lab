// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.



function myReduce(arr, callback, initialValue) {
    var prevValue;
    var i = 0;
    //start with [0]
    if (initialValue == undefined) {
        prevValue = arr[0];
    // goes to [1]
        i = 1;
    }
    else {
        prevValue = initialValue;
    }
    // repeat until at the end of the array
    for(; i < arr.length; i++) {

        prevValue = callback(prevValue, arr[i], i, arr);

    }

    // return value
    return prevValue;

}

/*
Best if you don't code out here.
If you want to check your code, use `index.js`!
*/

// export this function (you can ignore this for now)
module.exports = myReduce;


/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/




// export this function (you can ignore this for now)
module.exports = myReduce;
