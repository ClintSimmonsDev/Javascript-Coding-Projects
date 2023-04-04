  //Convert numbers to their Roman Numerals

  //Create array of arrays with roman numerals and their corresponding numeric values
  const romanArray = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

function convertToRoman(num) {
  if (num === 0) {
    return '';
  }
  //Loop through array to find the first number (romanArray[i][0]) that num is greater or equal to, return that number's roman numeral
//Then subtract that number (romanArray[i][0]) from the num to get the remainder and concat the remainder's roman numeral(s) to the one you already got
  for (var i = 0; i < romanArray.length; i++) {
    if (num >= romanArray[i][0]) {
      return romanArray[i][1]//L
       + //concat the roman numerals
      convertToRoman(num - romanArray[i][0]);//3 so returns I three times
    }
  }
}

console.log(convertToRoman(53));//LII