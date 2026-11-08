// task 1

/*

const myForEach = (arr , fn) => {

    for (let i = 0 ; i < arr.length ; ++i) {

        fn(arr[i] , i , arr);

    }

}

myForEach(["a" , "b"] , (item , i) => console.log(i , item));

*/

 // task 2

/*

const myMap = (arr , fn) => {

    const res = [];

    for (let i = 0 ; i < arr.length ; ++i) {

        res.push(fn(arr[i] , i , arr));

    }
    return res ;

}

console.log( myMap([1 , 2 , 3], (x) => x * 10) ) ;

*/


// task 3

/*

function myFilter ( arr , fn ) {

   const new_arr = [] ;

   for (let i =  ; i < arr.length ; ++i) {

      if (fn ( arr[i], i , arr ) ) { 

        new_arr.push(arr[i]);

      }

   }

   return new_arr ;


}

// console.log ( myFilter( ["apple" , "kiwi" , "banana"], (w) => w.length > 4 ) ) ;

// console.log(myFilter( [ 1 , 2 , 3 , 4 , 5 , 6 ], (x) => x % 2  === 0) ) ;

*/

 // task 4

 /*

 function myFind ( arr , fn ) {

    for (let i = 0 ; i < arr.length ; ++i) {

        if (fn ( arr[i] , i , arr )) {

            return arr[i] ;

        }
    }


 }

 */

//  console.log (myFind ( [5 , 12 , 8 , 130], (x) => x > 10 ) ) ;

//  console.log (myFind ( [1 , 2], (x) => x > 10 ) ) ;

  // task 5

/*

function myFindIndex ( arr , fn ) {

    for (let i = 0 ; i < arr.length ; ++i) {

        if (fn ( arr[i] , i , arr ) ) {

            return i ;

        }
        return -1 ;

    }


}

// console.log(myFindIndex ( [5 , 12 , 8 , 130] , (x) => x > 10) ) ;

// console.log(myFindIndex ( [1 , 2] , (x) => x > 10) ) ;

*/

// task 6

/*

function mySome (arr , fn) {

   for ( let i = 0 ; i < arr.length ; ++i ) {

      if (! fn (arr[i] , i  , arr)) {

         return true;

      } 

    }
   
   return false ;


}

function myEvery( arr , fn ) {

   for ( let i = 0 ; i < arr.length ; ++i ) {

      if (! fn (arr[i] , i  , arr)) {

         return false;

      } 

   }
   
   return true ;

}

console.log ( mySome ( [1 , 3 , 4], (x) =>  x % 2 === 0 ) ) ;

console.log ( myEvery ( [2 , 4 , 6], (x) =>  x % 2 === 0 ) ) ;

console.log ( myEvery ( [2 , 3], (x) =>  x % 2 === 0 ) ) ;

console.log (mySome ( [], (x) => true) ) 

console.log (myEvery ( [], (x) => false) ) 

*/


// task 7

/*

function myReduce (arr , fn , initial) {

  let acc = initial ; 

    for (let i = 0 ; i < arr.length ; ++i) {

        acc = fn (acc , arr[i] , arr) ;

    }

    return acc ;

}

// console.log (myReduce ( [ 1 , 2 , 3, 4 ], (acc , x) => acc + x , 0) ) ;

// console.log ( myReduce(["a", "b", "c"], (acc, s) => acc + s.toUpperCase(), "") );

// console.log ( myReduce( [1, 2, 3, 4], (acc, x) => acc + x) ) ;

// console.log ( myReduce ([], (acc, x) => acc + x) ) ;

*/

