function mapper(n, i, a){
   return `<li>${i + 1} of ${a.length} - ${n}</li>`;
}
function someFunction(){
   const ar = [-10, 50, -12, 80, 40];
   const ar3 = ar.map(mapper);
   console.log(ar3);
}

const ar = [-10, 50, -12, 80, 40];
ar.push(70);
//1 ****** str - "-10#50#-12#80#40#70"
//**********solution based on substring  */
//let str = '';
//ar.forEach(function(n){
//   str += n + '#';
//})
// str - "-10#50#-12#80#40#70"
//str = str.substring(0, str.length - 1);

// str - "-10#50#-12#80#4070"
//const lastSharpIndex = str.lastIndexOf('#')
//const str1 = str.substring(0, lastSharpIndex);
//const str2 = str.substring(lastSharpIndex +1);
//str = str1 + str2;

//**********solution based on forEach from second number */
// str - "-10#50#-12#80#40#70"
//const ar1 = ar.slice(1);
//let str =  '' +ar[0];
//ar1.forEach(n => str += '#' + n);
//console.log(str);

//***********printing out sequense number of element, element, length of array */
// 1 of 5 => -10; .... 2 of 5 => 50 ....
//ar.forEach((n, i, a) => console.log(`${i + 1} of ${a.length} - ${n}`));

//********************************************************** */
//method "map"
//use case of applying method map: you want to create new array with elements that are recived as result of some converton
//example you want to create new array with elements that are multiplication on 2 of each source element
const ar2 = ar.map(n => n * 2);
console.log(ar2);
someFunction();
//const ar3 = ar.map(n => `<li>${n}</li>`);

//const ar3 = ar.map()
//console.log(ar3);



