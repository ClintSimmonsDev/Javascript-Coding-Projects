//break up array into smaller arrays of size n
function chunkArrayInGroups(arr, size) {
  var slicedArr = [];
  //loop through array and slice chunks of size n into new array
  for(let i = 0; i < arr.length; i += size){
  slicedArr.push(arr.slice(i, i + size));
  }
  return slicedArr;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
//[ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8 ] ]