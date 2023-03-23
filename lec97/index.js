/*
2 type of module in javascript
    a.commonjs module
    b. ES6 module
*/

// using commonjs module
// const hello = require("./module1");
// hello();

// using ES6 modules
import hello from "./module2.js";
hello();

/*
Note:- to use ES6-module, yiu must have to add this key-value pair `type: "module"` in the package.json
*/
