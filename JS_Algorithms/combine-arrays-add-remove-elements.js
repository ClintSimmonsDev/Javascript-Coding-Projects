//Combine arrays into one, keeping only unique elements (Remove if there is a duplicate). If element has been removed but appears again, add it back in.
function sym(...args) {
    let finalArr = [];
    let firstTwo = true
    let whichArrLonger = args[1].length > args[0].length ? 1 : 0;
     while(args.length > 0 && firstTwo == true){
      for(let j=0; j < args[whichArrLonger].length; j++){
        if(!args[1].includes(args[0][j]) && !finalArr.includes(args[0][j]) && args[0][j] != undefined){
          finalArr.push(args[0][j]);
        }
        if(!args[0].includes(args[1][j]) && !finalArr.includes(args[1][j]) && args[1][j] != undefined){
          finalArr.push(args[1][j]);
        }
      }
         args.splice(0,2)
         finalArr.sort();
         firstTwo = false;
     }
     while(args.length > 0 && firstTwo == false){
        let whichArrLongerTwo = finalArr.length >= args[0].length ? finalArr.length : args[0].length;
        for(let w=0; w < whichArrLongerTwo; w++){
        if(finalArr.includes(args[0][w]) && args[0][w] != undefined){
            finalArr.splice(finalArr.indexOf(args[0][w]),1)
            args[0].splice(args[0].indexOf(args[0][w]),1); 
        }
        }
        for(let y=0; y < whichArrLongerTwo; y++){
            if(!finalArr.includes(args[0][y]) && args[0][y] != undefined){
            finalArr.push(args[0][y]);
            }
        }
        finalArr.sort();
        args.splice(0,1)
     }
     finalArr.sort();
     console.log("finalArr =",finalArr)
     return finalArr;
  }
  
  sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);//