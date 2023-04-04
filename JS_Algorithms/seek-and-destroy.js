//return an array with arguments removed from it
function destroyer(arr,...args) {
return arr.filter(x => !args.includes(x));
  //return arr.filter(elem => !valsToRemove.includes(elem));
  console.log(arr);

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); //[1,1]