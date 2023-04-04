//take a given number and add up all fibonacci numbers less than the number which are ODD.

function sumFibs(num) {
  //get fibonacci array started
  let fibNum = [1,1];
  //initialize variable to be next fib number
  let subtotal = 0;
  //this will be the final total
  let finalTotal = 0;
  //add up last 2 nums in array to become next fib number
  while(subtotal <= num){
    subtotal = fibNum[fibNum.length-1] + fibNum[fibNum.length-2];
    //push new fib number to array fibNum
    fibNum.push(subtotal);
    }
    //subtotal might end up higher than num, so remove it
  if(fibNum[fibNum.length-1] > num){
  fibNum.pop();
  }
  //filter out all the even numbers
  let newNum = fibNum.filter((x) => x % 2 != 0);
  //add up all the remaining nums in the array
  newNum.forEach(add);
  function add(nums){
    finalTotal += nums;
  }
  console.log(newNum);
  console.log(finalTotal);
  return finalTotal;
}

sumFibs(100);