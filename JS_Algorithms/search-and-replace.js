//replace part of string(str) with supplied word to replace(before), and the replacement(after)
//If part of string to be replaced is capitalized, replacement must also be capitalized. If only replacement(after) is capitalized but original is not, do not capitalize replacement.

function myReplace(str, before, after) {
//track whether we need to mess with upper cases at all
let strayUppers = 0;
//Set str and before to lower case so we can find before in the str, regardless of whether it was capitalized initially
let lowerStr = str.toLowerCase();
let lowerBefore = before.toLowerCase();
//isolate the first letter of replaced word to get its index
let replaced = lowerStr.indexOf(lowerBefore);
//if first letter of replaced word was capitalized
if(str[replaced] === str[replaced].toUpperCase()){
  //re-capitalize the before and after's first letters
  let upperAfter = after[0].toUpperCase();
  let upperBefore = before[0].toUpperCase();
  let newAfter = after.replace(after[0], upperAfter);
  let newBefore = before.replace(before[0], upperBefore);
  //replaced word now == capitalized after
  str = str.replace(newBefore, newAfter);
  //indicate shenanigans with upper cases
  strayUppers += 1;
  console.log("Uppercase in string");
}
//check if replacement(after) is capitalized
if(after[0] === after[0].toUpperCase()) {
  //uncapitalize that bad boy
  let lowerAfter = after[0].toLowerCase();
  after = after.replace(after[0], lowerAfter);
  //replace string as normal
  str = str.replace(before, after);
  console.log("Uppercase in After");
  //indicate shenanigans with upper cases
  strayUppers += 1;
}
//No uppercase shenanigans - just replace before & after
if(strayUppers == 0){
  console.log("All is normal");
  str = str.replace(before, after);
}
  console.log(str);
  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped");