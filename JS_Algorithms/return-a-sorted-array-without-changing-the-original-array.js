//return sorted array without affecting original array
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Copy array to new array
const newArr = arr.map((x) => x);
//Use sort function with special callback to sort numbers correctly
newArr.sort(function(a, b) {
  return a - b;
});
console.log(newArr);
return newArr;
}

nonMutatingSort(globalArray);