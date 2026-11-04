function curry (fn) {

    

}

const add3 = (a,b,c) => a + b + c ;

console.log(add3 (1) (2) (3)) ;
console.log(add3 (1 , 2) (3)) ;
console.log(add3 (1) (2 , 3)) ;
console.log(add3 (1 , 2 , 3)) ;

