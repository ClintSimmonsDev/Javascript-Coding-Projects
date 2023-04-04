//Check if str is a palindrome, after all non-alphanumeric characters are removed

function palindrome(str) {
  //create array to test str against
  let testArr = [];
  //remove non-alphanumerics, make str lowercase to simplify comparison, and split str into an array so each index value can be compared
  str = str.replace(/[\W_]/g, '').toLowerCase().split("");
  //loop through and fill testArr with all str values using UNSHIFT so testArr will mirror str but backward, ie str = [1,2,3] testArr = [3,2,1]
  for(let i = 0; i < str.length; i++){
    testArr.unshift(str[i]);
  }
  //check if EVERY index value in backward testArr matches every index value in str array, if so, return true, else return false
  if(testArr.every((val, index) => val === str[index])){
    return true;
  }
  else{
    return false;
  }

}
palindrome("A man, a plan, a canal. Panama");//yep!