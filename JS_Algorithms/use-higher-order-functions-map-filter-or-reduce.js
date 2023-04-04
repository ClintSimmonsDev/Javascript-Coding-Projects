//filter positive whole numbers from array then return those numbers squared.
const squareList = arr => {
  const newArr = arr.filter(x => x > 0 && x % parseInt(x) === 0).map((x) => x*x);
  return newArr;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);