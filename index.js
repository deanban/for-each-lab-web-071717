function iterativeLog(array){
array.forEach((element, index) => 
	{console.log(`${index}: ${element}`)})
}

function iterate(callback){
	let arr = ['brigit', 'daniel', 'joe'];
	arr.forEach(callback);
	return arr;
}

function doToArray(array, callback){
	array.forEach(callback);
}