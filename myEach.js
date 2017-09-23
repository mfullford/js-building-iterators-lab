// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ForEach

function myEach(arr, callback) {
	for(let i=0; i<arr.length; i++) {
		callback(arr[i], i, arr); 
	}
}
  


  items.forEach(function(item){
  copy.push(item)
});
  
 // create a function myEach which implements Array.prototype.forEach

 // create for each in a different way


/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myEach;
