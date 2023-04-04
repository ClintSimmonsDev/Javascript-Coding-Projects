//check if all letters in 2nd elem of array also exist in 1st elem of array

function mutation(arr) {
  //ignore case by making all lowercase
  for(let i=0;i<arr.length;i++){
    arr[i] = arr[i].toLowerCase();
  }
  //grab first elem, arr[0], put into variable
  var splitElem = arr[0];
  //loop through 2nd elem, arr[1], seeing if each letter is in 1st elem
  for(let j=0;j<arr[1].length; j++){
    if(!splitElem.includes(arr[1][j])){
      //if it finds a single mismatch, return false
      console.log(false);
      return false;
    }
  }
  //it found all matches, return true
  console.log(true);
  return true;
}

mutation(["Kello", "leo"]);