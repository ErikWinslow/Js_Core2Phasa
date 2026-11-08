 // task 1

 /*
 
 function createStudent (name , age , city) {

    const Student = {

        name : name ,

        age : age ,

        city : city ,
 
    }

    return Student ;


 }

 console.log(createStudent("Ani" , 20 , "Yerevan")) ;

 */

 // task 2

 /*

 function getFullName (person) {

    return person.firstName + " " + person.lastName ;


 }

 console.log(getFullName( {firstName : "Aram" , lastName: "Petrosyan"} ));

 */

 // task 3

 /*

 function isAdult (person) {

    return person.age >= 18 ? true : false ;

 }

//  console.log (isAdult( {name : "Lilit" , age : 17} )) ; 

//  console.log (isAdult( {name : "Davit" , age : 25} )) ; 

*/

// task 4

/*

function getProperty (obj , key) {

   return obj[key];

}

console.log(getProperty( { color : "red" , size : "M" }, "size" ))

*/

// task 5

/*

function updateAge (person , newAge) {

   person.age = newAge

   return  person;

}

console.log(updateAge( {name : "Ani" , age : 20}, 21) ) ;

*/

// task 6

/*

function addEmail (person , email) {

    person.email = email ;

    return person;

}

console.log(addEmail( {name : "Ani"} , "ani@mail.com"));

*/

// task 7

/*

function removeProperty (obj , key) {

    delete obj[key];

    return obj ;

}

console.log(removeProperty( {name : "Ani" , age: 20}, "age" )) ;

*/

// task 8

/*

function hasProperty (obj , key) {

    return key in obj ;

}

console.log(hasProperty( {name : "Ani"}, "name") ) ;

*/

// task 9

/*

function countProperties ( obj ) {

   return Object.keys(obj).length;

}

console.log (countProperties ( {a : 1 , b : 2 , c : 3} ) ) ;

*/

// task 10

/*

function describeCar ( car ) {

    return `"${car.brand} ${car.model}, ${car.year}"`

}

console.log(describeCar ( {brand : "Toyota" , model : "Camry" , year : 2020 } ) );

*/

// task 11

/*

const user = {

    name : "Aram" ,

    address : {city : "Gyumri" , street : "Abovyan 5"} ,

}

function getCity ( user ) {

  return user.address.city ;

}

console.log(getCity (user) ) ;

*/

