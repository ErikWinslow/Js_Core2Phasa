function limitCalls (fn , n) {

    let calls = 0 ;

    return function (...args) {

        if (calls < n) {

            calls++;

            return fn(...args) ;

        } else {

            return undefined ;


        }

    }

}

const add = (a , b) => a + b ;

const limitedAdd = limitCalls(add , 2) ;

console.log(limitedAdd(3 , 3) );