let arr1 = [1,2,3,4,5,6];
let arr2 = [];
//iterate from end of array backwards, popping off one item at a time.
for(let i = arr1.length-1; i >= 0; i--){
  arr2.push(arr1[i])
}
console.log(arr2); //[6,5,4,3,2,1]

//Most compact method using forEach and unshift
//Iterate through arr1 and add each to beginning (unshift) of arr2

arr1.forEach((x) => {
        arr2.unshift(x);
    });
