
 // task 1

 /*

function getFirstAndLast (arr) {

   let New_Arr = [arr[0] , arr.at(-1)];

    return New_Arr;

}

console.log(getFirstAndLast([10 , 20 , 30 , 40])); // [10 , 40] ;

console.log(getFirstAndLast(["a" , "b" , "c" , "d"])); // [a , d] ;

*/

 // task 2

  /*

 function getLength (arr) {

    return arr.length ;

 }

 console.log(getLength([3 , 1 , 2])) ;

 */

 // task 3

 /*

 function  addToEnd (arr , item) {

    arr.push(item);

    return arr ;

 }

 console.log(addToEnd(["Banana" , "apple"] , "Cherry"));

 */

 // task 4

 /*

 function addToStart (arr , item ) {

   arr.unshift(item);

     return arr ;


 }

 console.log(addToStart(["B" , "C"] , "A"));

 */

 // task 5
 
/* 

 function removeLast (arr) {

    return arr.pop() ;

 }

 console.log(removeLast([1 , 2 , 3 ] ) );

*/


 // task 6

 /*

 function hasItem (arr , item) {

    return arr.includes(item) ;

 }

 console.log(hasItem(["red" , "green"] , "green")); // true

 console.log(hasItem(["red" , "green"] , "blue")); // false

 */

 // task 7

 /*

 function findPosition (arr , item) {

    return arr.indexOf(item) ;

 }
  
*/

 // console.log(findPosition(["cat" , "dog" , "fish"] , "fish")) ; // 1 

 // console.log(findPosition(["cat" , "dog"] , "cow")) ; // -1 false так как в массиве нету такого значение


 // task 8 

 /*

 function JoinWords (arr) {

    return arr.join("");

 }

 console.log(JoinWords(["I" , "Love" , "JS"])) ;

*/


 // task 9

/*

 function firstThree (arr) {

    return arr.slice(0 , 3) ;


 }

 console.log(firstThree([5 , 10 , 15 , 20 , 25 , 35 , 45])) ;

*/

 // task 10

 /*

 function getMiddle ( arr ) {

    return arr[Math.floor(arr.length / 2)];

 }

 // console.log(getMiddle([1 , 2 , 3 , 4 , 5])) ;

 //console.log(getMiddle(["a" , "b" , "c" , "d" , "e"])) ;

 */

 // task 11

 /*

 function countWords (sentence) {

    let New_Arr = sentence.split(" ") ;

    return New_Arr.length ;

 }

 console.log(countWords("today is a good day")) ;

 */

 // task 12

 /*

 function replaceAt (arr , index , value) {

    arr[index] = value ;

    return  arr ;


 }

 console.log(replaceAt(["a" , "b"  , "c"], 1 , "B"));

 */