// input: ["lmn", "d", "d", "lmn", "a", "lmn", "a", "bc"]
// output: lmn -> 3
//           a -> 2
//           d -> 2
//          bc -> 1
function displayOccurrences(array){
    //creating object with key - unique element of array (string as an element of array)
    //                     value - occurrences count 
    // difference between obj = {a: 123, d: "abc"}; const a = "d"; obj.a == 123
    // and obj[a] === "abc";
    //obj.c = 10 -> {a: 123, d: "abc", c: 10}
    const res = {};
    for(let i = 0; i < array.length; i++){
        if(res[array[i]] === undefined){
            //string as content ao array[i] occures first tim
            res[array[i]] = 1;
        }
        else{
            res[array[i]] = res[array[i]] +1;
        }
    }
   // console.log(res);// -> intermediate debug log
   Object.entries(res).sort((e1, e2) => {
    const res = e2[1] - e1[1];
    return res === 0 ? e1[0].localeCompare(e2[0]) : res;
}).forEach(e => console.log(`${e[0]} -> ${e[1]}`));
}
const ar = ["lmn", "d", "d", "lmn", "a", "lmn", "a", "bc"];
displayOccurrences(ar);

//exapmles for homework-14 task-2
//const arr = [6.4, 7.3, 6.5, 6.9];
//const statistics = countBy(array, element => Math.floor(element))
//result: -> {"6": 3, "7":1 }
//const arr = ['abcd, 'lmnr', 'ab', 'dddd'];
//const statistics = countBy(array, element => element.length)
//result:statistics -> {"4": 3, "2": 1}
//const arr = [{age: 25, id:123, name: "Vasya"}, {age: 50, id:123, name: "Vasya"}
//{age: 25, id:123, name: "Vasya"}, {age: 70, id:123, name: "Vasya"}]
//const statistics = countBy(array, element => element.age)
//result: statistics -> {"25": 2, "50": 1, "70": 1};


