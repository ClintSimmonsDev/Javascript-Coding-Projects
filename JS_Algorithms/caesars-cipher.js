//Take an 'encoded' str and return the 'true' value. Each letter of the encoded str must be shifted 13 letters earlier in the alphabet, ie Z -> M and  A -> N (wraps around)
function rot13(str) {
  //create alphabet string, split into array. If letter is Z, it becomes M so alphabet repeats first 13 letters
  let alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM".split("")
  //split the encoded str also
  let splitStr = str.split("");
  //loop through encoded str and find corresponding index value in alphabet, store in 'indexes'
  for(let i=0; i< splitStr.length; i++){
    let indexes = alphas.indexOf(splitStr[i]);
    //keep characters ! ? and .
    if(splitStr[i] == " " || splitStr[i] == "?" || splitStr[i] == "!" || splitStr[i] == "."){
      continue;
    }
    //if you try to go back 13 letters but can't because you hit the beginning of the alphabet (returns undefined), go forward 13 instead
    if(alphas[indexes - 13] != " " && alphas[indexes - 13] == undefined){
      splitStr[i] = alphas[indexes + 13];
    }
    //else just go back 13 letters
    else {
      splitStr[i] = alphas[indexes - 13]; 
    }
  }
  //re-join the letters in the array back into a single string
    splitStr = splitStr.join("");
    return splitStr;
}

console.log(rot13("PBBY NYTBEVGUZ OEB"));//COOL ALGORITHM BRO