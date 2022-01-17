//*******************Arrays */
const ar = [2, 100, 9, 80];
//ar.sort(function(a, b){
//   return a - b;
//});

//ar.sort((a, b) => a - b);
//console.log(`ar is ${ar.toString()}`);
//*******************Adding element/s at end of any array */
ar[ar.length] = 200;
console.log(ar);
ar.push(300,25);
console.log(ar);
const ar1 = [-8, 30, -57];
//ar.push(ar1); that will be added array but not separated numbers
// if you want to add separated numbers you should apply a spread operator...
ar.push(...ar1);
console.log(ar);
// for adding elements at begining of an array there is method "unshift"
//everithing has been said about "push" will work for "unshift" only unlike "push" unshift method
//adds elements at beginning
const ar2 = [27, 35];
ar.unshift(...ar2);
console.log(ar);
//abc123drtyugr
//method splice for inserting or replacing any elements in any place
//first argument - index for inserting or replacing
//second argument - number of teh deleted elements (if 0 than splice will be applide only for inserting)
//third argument - designates sequence of being inserted element like push/unshift
ar.splice(2,0,1,3);
console.log(ar);
//removing (deleting)
let el = ar.pop();//removes the last element and returns it
//el = -57; -57 will be removed from the array ar
el = ar.shift(); //renoves the first element and returns it
//el = 27; 27 will be removed from the array ar
console.log(el,ar);
ar.splice(3,5);//remove 5 elements begining from the one at index 3
console.log(ar);
//includes, indexOf
//two dimensional arrays
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
const matrix2 = [[100, 20], [50, -5], [34, 28]];
displayMatrix(matrix2);
function displayMatrix(matrix){
   for(let i = 0; i < matrix.length; i++){
      let row = '';
      for (let j = 0; j < matrix[i].length; j++){
         row = row + matrix[i][j] + '  ';
      }
      console.log(row);
   }
}

