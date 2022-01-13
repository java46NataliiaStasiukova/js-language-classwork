console.log("Hello World");
//for (var i = 0; i < 3; i++ ){
 //   setTimeout(function(){
  //      console.log(i);
   // })
//}
//for(let i = 0; i < 3; i ++){
   // setTimeout(function(){
    //    console.log(i);
   // })
//}
//for (var i = 0; i < 3; i++ ){
 //   console.log(i);
//}
//console.log(i);
const fun = function(a, b){
    return a + b;
}
let a = 5;
//console.log(a ** 2);
//console.log(fun(10, 20));

//console.log(a(10,20));//error
//console.log(fun ** 2);//NaN
console.log("12" + 12, '"12" + 12');//console.log("12" + 12); // 1212 - JS defines that operator + exists 
//for string, that's why number 12 will be converted to string
console.log("12" - 12);//JS defines that operator - doesn't exist for string, 
//that's why string "12" will be converted to NaN
console.log("ab" - 12); //.....JS will try conver "ab" 
//a result of this there will ve value Nan.

//Sometimes there is a need to explicit convertion from string to a number
//"+" unary is simplest way for the explicit conversion of a string to a number
console.log(`+"12" + 12 = ${+"12" + 12}`);