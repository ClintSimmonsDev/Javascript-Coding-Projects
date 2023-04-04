//add a number to an array, sort it and return the number's index
function getIndexToIns(arr, num) {
  //add num to array
  arr.push(num);
  //sort array numerically - lowest to highest
  arr.sort((a,b) => a-b);
  //get index of the sorted num you added
  let finalNum = arr.indexOf(num)
  return finalNum;
}

getIndexToIns([3, 10, 5], 3);