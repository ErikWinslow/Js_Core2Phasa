function once (fn) {

   let result = null ;
   
    return function (...args) {

          if (result === null) {

            return result = fn(...args) ; 

          }

          return result ;

    }

}

const init = ((name) => `Initialized by ${name}`) ;

const initOnce = once(init) ;

console.log (initOnce ("Ani")) ;

console.log (initOnce ("Aram")) ;