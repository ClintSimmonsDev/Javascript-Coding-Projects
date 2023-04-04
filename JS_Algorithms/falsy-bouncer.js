//remove all elements from array that are Boolean (truthy or falsy)
function bouncer(arr) {
var newArr = arr.filter(Boolean);
return newArr;
}

bouncer([7, "ate", "", false, 9]);