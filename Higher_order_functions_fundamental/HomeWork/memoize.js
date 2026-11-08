function memoize (fn) { 

  let cache = {} ;

    return function (...arg) {
        
     let key = JSON.stringify(arg) ;

         if (cache[key]) {

            return cache[key]

         } else {

            cache[key] = fn(...arg) ;

         }

         return cache[key] ;

    }
    
}

const slowSquare = (n) => n * n  ;

const fastSquare = memoize(slowSquare) ;

console.log (fastSquare (4) ) ;

console.log (fastSquare (4) ) ;

console.log (fastSquare (5) ) ;