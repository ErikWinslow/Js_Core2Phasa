// task 1 

/*

function curry ( fn ) {

   function inner(args) {

       return function (...res) {

         const combined = [...args , ...res] ;

         if (combined.length >= fn.length) {

            return fn(...combined) ;

         } else {

            return inner(combined) ;

         }

       }

   }
   
   return inner([]) ;


}



const format = curry((currency , amount) => `${amount} ${currency}`)

const toAMD = format("AMD") ;

console.log (toAMD(550)) ;

// const add3 = (a , b ,c) => a + b + c ;

// const curriedAdd = curry(add3) ;

// console.log( curriedAdd(1)(2)(3) ) ; 

// console.log( curriedAdd(1 , 2)(3) ) ;

// console.log( curriedAdd(1)(2 , 3) ) ; 

// console.log( curriedAdd(1 , 2 , 3) ) ; 


*/


