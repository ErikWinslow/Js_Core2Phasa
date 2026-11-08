function curry (fn) {

    function newCurry (res) {

      return function (...args) {

        const new_arr = [...res , ...args] ;

        if (new_arr.length >= fn.length) {

           return fn(...new_arr) ;

        } else {

            return newCurry(new_arr) ;

        }
         

      }


    }

    return newCurry([]) ;

} 

const add3 = (a , b , c) => a + b + c ;

const curriedAdd = curry(add3) ;

console.log (curriedAdd (1)(2)(3) ) ;

console.log (curriedAdd (1 , 2) (3) ) ;

console.log (curriedAdd (1) (2 , 3) ) ;

console.log (curriedAdd (1 , 2 , 3) ) ;


