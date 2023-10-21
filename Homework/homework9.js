'use strict';


let userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];
let outputArray = [];
 
function removeusingSet(arr) {
    let outputArray = Array.from(new Set(arr))
    return outputArray
}
 
console.log(removeusingSet(userNames));
