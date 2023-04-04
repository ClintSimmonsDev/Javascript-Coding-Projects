//take several arrays and return one array with all numbers in order, but with duplicates removed

function uniteUnique(...args) {
  //create some blank arrays
  let newArr = [];
  let coolArr = []
  //convert args to string so we can iterate with for loop
  args = args.toString();
  //iterate through, adding to newArr not already there
  for(let i = 0; i < args.length; i++){
    if(!newArr.includes(args[i])) {
      //it wants to add a comma to array?! skip adding comma!
      if(args[i] == ','){
        continue;
      }
      newArr.push(args[i]);
      //convert strings to numbers
      coolArr = newArr.map(Number);
    }
  }
  console.log(coolArr);
  return coolArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);