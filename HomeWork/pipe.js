/*

function pipe (...fns) {

    return function (...args) {

        let result = args[0] ;

          for (let i = 0 ; i <  fns.length ; ++i) {

            result = fns[i](result) ;

          }

          return result ;

    }

}

const calc = pipe (

    (x) => x + 1 ,

    (x) =>  x * 2 ,

    (x) =>  x - 3 , 

) ;

console.log(calc (5)) ;

*/

