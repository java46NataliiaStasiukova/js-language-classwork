// Classwork part-1
// Filter
const ar20 = [13, 17, 20, 23, 2, 40];
const arEven = ar20.filter((n, i, a) => n % 2 == 0);
const arEvenOdd = ar20.filter((n, i, a) => ar20.length % 2 == 0 ? 
n % 2 == 0 : n % 2 == 1);
console.log(arEvenOdd);

// Reduce
let res = ar20.reduce((res, cur) => res + cur, 0);
console.log(res);
const max = ar20.reduce((max, cur) => cur > max ? cur : max, ar20[0]);
console.log(max);
//reduce with no second element
res = ar20.reduce((res, cur) => res + cur);
console.log(res);
//if the user call does not contain a second argument, 
//then the first element of the array will be considered as 
//an initial result ( in the case iterating begins from the 
//second element of the array)





