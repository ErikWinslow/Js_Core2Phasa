// task 8

/*

function repeat (n , fn) {

    let new_arr = [] ;

    for (let i = 0 ; i < n ; ++i) {

        new_arr.push (fn (i));
    }

    return new_arr ;

}

console.log (repeat (4, (i) => i * i ) ) ;

console.log ( repeat (3 , () => "hi" ) ) ;

*/

// task 9

/*

function multiplier (n) {

    return function (x){

        return x * n ;

    } ;

}

const double = multiplier(2) ;

console.log ( double(5) ) ;

console.log ( [1, 2, 3].map(multiplier (3) ) ) ;

*/

// task 10 

/*

function between (min , max) {

    return function (num) {

        return num >= min && num <= max ;
    }

}

console.log( [5 , 10 , 15 , 20 , 25 ].filter (between (10 , 20) ) ) ;

*/

// task 11

/*

function not ( predicate ) {

    return function (isEven) {

        return !predicate(isEven);

    }

}

const isEven = (n) => n % 2 === 0 ;

console.log ( [1 , 2 , 3, 4 , 5].filter (not (isEven) ) ) ;

*/

// task 12 

/*

function pluck (key) {

    return function (obj) {

        return obj[key] ;

    }


}

const users = [

  { name: "Ani", age: 19 },

  { name: "Aram", age: 22 },
  
  { name: "Lilit", age: 20 },

];

console.log ( users.map(pluck("name")) ) ;

console.log ( users.map(pluck("age") ) ) ;

*/

//  task 13

// chishtn asac minchev verj chaskaaca ai-em ogtagorcel

/*

function pluck (key) {

    return function (obj) {

        return obj[key] ;

    }


}


function sortBy (key) {

    return function (a , b) {

        if (a[key] < b[key]) return -1 ;

        if (a[key] > b[key]) return 1 ;

        return 0 ;

    }

}

const users = [
  
  { name: "Ani", age: 19 },
  
  { name: "Aram", age: 22 },
  
  { name: "Lilit", age: 20 },

];


console.log ( [...users].sort(sortBy("age")).map(pluck("name") ) );

console.log ( [...users].sort(sortBy("name")).map(pluck("name") ) );

*/

// task 14 

/*

function withLogging(fn) {

    return function (...res) {

        console.log(fn.name , res) ;

        return fn(...res) ;
    }

}

const add = (a ,b) => a + b ;

const LoggeAdd = withLogging(add) ;

console.log(LoggeAdd (2 ,3) ) ;

*/

