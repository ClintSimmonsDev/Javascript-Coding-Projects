//Take string of letters & return array of arrays containing each letter and their DNA counterpart letter: "CT" -> [["C", "G"], ["T", "A"]]
function pairElement(str) {
  //create outer array
  let mainArr = [];
  //split string into individual strings/letters
  let splitStr = str.split("");
  //apply function to each letter
  splitStr.forEach(fuse)
  function fuse(ltr){
    //for each letter, create new array (subArr)
    let subArr = [];
    //add initial letter to subArr
    subArr.push(ltr);
    //check which second letter to add to subArr and push it
    ltr == "A" 
    ? subArr.push('T')
    : ltr == "T" 
    ? subArr.push('A')
    : ltr == "G" 
    ? subArr.push('C')
    : ltr == "C" 
    ? subArr.push('G')
    //useless console log because ternary needs something to do if false
    : console.log();
    //add each subArr to the outer mainArr
    mainArr.push(subArr);
  }
  return mainArr;
}
pairElement("ATC");//[["A","T"],["T","A"],["C","G"]]