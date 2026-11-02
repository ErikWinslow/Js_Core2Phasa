/*

function memoize (fn){

    const cache = {} ;

    return function (...args) {

        const key = args.join(",") ;

        if (key in cache) {

            return cache[key] ;

        }  else {

            return cache[key] = fn(...args) ;
        }

    }


}

let calls = 0 ;

const slowSquare = (n) => {

    calls++

    return n * n ;

}
const fastSquare = memoize(slowSquare) ;

console.log (fastSquare(5)) ;

console.log (fastSquare(5)) ;

console.log (fastSquare(3)) ;

console.log (calls) ;

*/