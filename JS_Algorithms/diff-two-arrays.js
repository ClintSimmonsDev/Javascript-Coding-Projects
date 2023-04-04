//return values that only exist one one array, not both
function diffArray(arr1, arr2) {
  const newArr = [];
  //compare first array to second
  for(let i = 0; i < arr1.length; i++){
    if(!arr2.includes(arr1[i])){
      newArr.push(arr1[i]);
    }
  }
  //compare second array to first
  for(let j = 0; j < arr2.length; j++){
    if(!arr1.includes(arr2[j])){
      newArr.push(arr2[j]);
    }
  }
  console.log(newArr);
  return newArr;
}
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);