//Take array and function, and return an array where all FALSE values are removed until you hit the first TRUE value, then leave the rest as-is

function dropElements(arr, func) {
  //create new array of true/false values based on given func
  let newArr = arr.map((func));//[false,false,false,true,true]
  //loop through newArr and splice out the indexes of all false values from main array, until you hit a true value
  for(let i=0; i<= arr.length; i++){
    if (newArr[i] == true){
      arr.splice(0, newArr.indexOf(true));
      //as soon as you hit a true, stop splicing & return
      return arr;
    }
  }
  //if no values are true, return empty array
  return [];
}

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});



//Simpler, alternative solution

//while (arr.length > 0 && !func(arr[0])) {
//    arr.shift();
//  }
//  return arr;
//}