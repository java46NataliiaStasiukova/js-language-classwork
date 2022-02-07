const point = {
        x: 3,
        y: 4
};
function displayPointInSpace(z, t){
        //"this." - reference to any object having properties x and y
        console.log(`x: ${this.x}, y: ${this.y}, z: ${z}, t: ${t}`);
}
//point.method = displayPointInSpace;
//point.method(10, 20);
//displayPointInSpace.call(point, 10, 20);
//displayPointInSpace.bind(point, 10, 20)();
//displayPointInSpace.apply(point, [10, 20]);
Function.prototype.mybind = function(thisObj, ...args){
        //this - reference to any functional object (in example - displayPointInSpace)
        //thisObject - reference to any object (in example - point)
        return  (...params) => {
//will not work if function will be not "=>"
                thisObj.method123456 = this;
                const res = thisObj.method123456(...args.concat(params));
                delete thisObj.method123456;
                return res;
        }
}
/************************************************ */
//arguments are passed at function call
const funDisplay = displayPointInSpace.mybind(point);
funDisplay(10, 20);
/************************************************ */
//all arguments are bound by the method "bind"
const funDisplayArguments = displayPointInSpace.mybind(point, 10, 20);
funDisplayArguments();
/************************************************ */
//mixed - part of arguments are bound by the methods "bind"
//and other part of arguments are passed at function call
const funDispalyMixed = displayPointInSpace.mybind(point, 10);
funDispalyMixed(20);




   



