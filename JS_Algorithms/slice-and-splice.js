function frankenSplice(arr1, arr2, n) {
//don't destroy original arrays
var arr1Copy = arr1.map((x) => x);
var arr2Copy = arr2.map((x) => x);
//Because we're always inserting into arr2 at set index (n), reversing array first makes them end up in correct order
arr1Copy.reverse();
for(let i = 0; i < arr1.length; i++){
    arr2Copy.splice(n,0,arr1Copy[i])
  }
  console.log(arr2Copy);
  return arr2Copy;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);