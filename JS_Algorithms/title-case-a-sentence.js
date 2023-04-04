function titleCase(str) {
  str = str.toLowerCase();
  var finalArr = [];
  let tempStr = str.split(" ");
  //console.log(tempStr);
  //console.log(tempStr.length);
  for(let x in tempStr){
    finalArr[x] = tempStr[x][0].toUpperCase() + tempStr[x].slice(1);
    //finalArr.push(tempStr[x]);
     //tempStr = tempStr[x][0].toUpperCase();
    //console.log(tempStr);
    //console.log(finalArr);
    var realArray =  finalArr.join(" ");

    
  }
  console.log(realArray);
  return realArray;
  //console.log(tempStr);
  //return tempStr;
}


titleCase("HANDLE HERE IS MY SPOUT");