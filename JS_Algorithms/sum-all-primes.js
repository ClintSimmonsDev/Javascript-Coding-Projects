//Sum all primes smaller than given number

function sumPrimes(num) {
let newNum = [];

for(let i = 2; i <= num; i++) {
newNum.push(i)
}
for(let i in newNum) {

newNum = newNum.filter(item => item == newNum[i] 
|| item % newNum[i] !== 0)
}
let answer = newNum.reduce((a,b) => a+b)
return answer;
}

sumPrimes(977);