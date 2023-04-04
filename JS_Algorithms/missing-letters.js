//find the missing letter in an alphabetic sequence

function fearNotLetter(str) {
  //create alphabet to compare to
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  //if nothing's missing, return undefined
  if(alpha.includes(str)){
  console.log("No probs");
  return undefined;
    };
  //split alphabet into array of letters
  alpha = alpha.split("");
  //find index of first str letter in alphabet
  let firstInAlpha = alpha.indexOf(str[0]);
  //loop through string, comparing each letter to alphabet
  for(let i = 0; i < str.length; i++){   
     if(alpha[firstInAlpha] === str[i]){
       //increment through str and alphabet together
        firstInAlpha++;
     }
     else{
       //missing letter found, return it
       console.log(alpha[firstInAlpha]);
       return alpha[firstInAlpha];  
     }
  }
}

fearNotLetter("jkln");//