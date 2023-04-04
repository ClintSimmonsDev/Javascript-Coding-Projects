//Add items in arr2 to arr1 if they don't already exist, otherwise, combine the item amount to arr1.

function updateInventory(arr1, arr2) {
    //create temp array to hold arr1 names of items
    let temp = [];
    //push arr1 values to temp array
    for(let i=0; i<arr1.length; i++){
        temp.push(arr1[i][1])
    }
    //loop through arr2, if item isn't in arr1, push it to it
    arr2.forEach(item => {
        if(!temp.includes(item[1])) {
            arr1.push(item)
        }
        //else if it exists in arr1, grab the index of item from temp array, find that item in arr1 and add the key(amount) from that item(item[0])
        else if(temp.includes(item[1])){
            let index = temp.indexOf(item[1]);
            arr1[index][0] += item[0];
        }
    })
    //sort the final arr1 by names of items alphabetically
    let answer =  arr1.sort(function(a, b){
        if(a[1] > b[1]){
            return 1;
        } else if(a[1]< b[1]){
            return -1;
        } else {return 0}
    });
    return answer;
    
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Toothpaste"],
    [3, "Half-Eaten Apple"],
    [67, "Hair Pin"],
    [7, "Bowling Ball"]
];

updateInventory(curInv, newInv);