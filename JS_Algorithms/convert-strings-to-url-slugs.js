// return string as url-friendly string with no spaces, separated by hyphens, all lower case
function urlSlug(title) {
let urlTitle = 
//trim spaces from left & right of string to start
title.trim()
//split on one or more spaces \s+
.split(/\s+/)
//join it back together using hyphens
.join("-")
//make everything lower case
.toLowerCase();

return(urlTitle);
}

urlSlug(" Winter Is  Coming");