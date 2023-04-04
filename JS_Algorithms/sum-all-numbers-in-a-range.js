//add all nums including AND between two given nums in an array
function sumAll(arr) {
  let total = 0;
  //if first num is smaller than second num
  if (arr[0] < arr[1]){
    for(let i = arr[0]; i <= arr[1]; i++ ){
    total += i;
  }
    console.log(total);
    return total;}
  //if second num smaller than the first
  else {
    for(let j = arr[0]; j >= arr[1]; j-- ){
    total += j;
  }
    console.log(total);
    return total;
  }
}

sumAll([10, 5]); //45