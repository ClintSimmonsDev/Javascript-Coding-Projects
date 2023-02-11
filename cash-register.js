function checkCashRegister(price, payment, drawerCash) {

  let registerCash = drawerCash.reverse();
  const currencies = [["ONE HUNDRED", 100], ["TWENTY", 20], ["TEN", 10], ["FIVE", 5], ["ONE", 1], ["QUARTER", .25], ["DIME", .1], ["NICKLE", .05], ["PENNY", .01]];
  let statusMessage = ["INSUFFICIENT_FUNDS", "CLOSED", "OPEN"];
  let changeDue = payment - price;
  let changeMessage = {status: statusMessage, change: changeDue};
  let totalRegCash = 0;
  let hundredArray = [], twentyArray = [], tenArray = [], fiveArray = [], oneArray = [], quarterArray = [],
      dimeArray = [], nickelArray = [], pennyArray = [];
  let moneyArray = [hundredArray,twentyArray,tenArray,fiveArray,oneArray,quarterArray,dimeArray,nickelArray,pennyArray];

  for(let i = 0; i< registerCash.length; i++){
    totalRegCash += registerCash[i][1];
    totalRegCash = Math.round(totalRegCash * 100)/100
  }
  if(totalRegCash < changeDue){
    changeMessage.status = statusMessage[0];
    changeMessage.change = [];
    console.log(changeMessage);
    return changeMessage;
  }
  if(totalRegCash == changeDue){
    changeMessage.status = statusMessage[1];
    changeMessage.change = drawerCash.reverse();
    console.log(changeMessage);
    return changeMessage;
  }
  for(let j = 0; j < registerCash.length; j++){
    while(changeDue >= currencies[j][1]) {
      if(!moneyArray[j].includes(registerCash[j][0]) && registerCash[j][1] > 0){
        moneyArray[j].push(currencies[j][0]);
      }
      if(registerCash[j][1] > 0){
      console.log("change due: $",changeDue, "-- we have in " +registerCash[j][0]+": $",registerCash[j][1])
      console.log("we give a",registerCash[j][0],"\n")
        moneyArray[j].push(currencies[j][1]);
        registerCash[j][1] -= currencies[j][1];
        if(moneyArray[j].length > 2){
          moneyArray[j][1] += moneyArray[j][2];
          moneyArray[j].pop();
        }  
      }
      else if(registerCash[j][1] == 0 ){
        j++;
        while(registerCash[j][1] == 0 && j != 8){
        j++;
        }
        moneyArray[j].push(currencies[j][0]);
        moneyArray[j].push(currencies[j][1]);
        console.log("change due: $",changeDue, "-- we have in " +registerCash[j][0]+": $",registerCash[j][1])
        console.log("we give a",registerCash[j][0],"\n")
        registerCash[j][1] -= currencies[j][1];
        if(moneyArray[j].length > 2){
          moneyArray[j][1] += moneyArray[j][2];
          moneyArray[j].pop();
        }
        if(j == 8 && registerCash[j][1] == 0 && changeDue > 0){
        changeMessage.status = statusMessage[0];
        changeMessage.change = [];
        console.log(changeMessage);
        return changeMessage;
      }
    }
      changeDue -= currencies[j][1];
      changeDue = Math.round(changeDue * 100)/100;
    }
  }
  moneyArray =  moneyArray.filter(e => e.length)
  changeMessage.status = statusMessage[2];
  changeMessage.change = moneyArray;
  console.log(changeMessage)
  return changeMessage;
}

checkCashRegister(119.5, 200, [["PENNY", 0.5], ["NICKEL", .4], ["DIME", .5], ["QUARTER", 3.25], ["ONE", 12], ["FIVE", 45], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);