
//  task 1

/*

function getSecondName (Students) {

    return Students[1].name ;

}

console.log (getSecondName( [

    {name : "Aram"} ,
    
    {name : "Lilit"} ,

    {name : "Davit"} ,

 ] ) ) ;

*/

// task 2

/*

function getLastPrice ( products ) {

  return products.at(-1).price;

}

console.log(getLastPrice ( [

    {title : "Pen" , price : 200} ,

    {title : "NoteBook" , price : 900} ,

    {title : "Apple" , price : 1000} ,

] ) ) ;

*/

// task 3

/*

function addSkill (person , skill) {

    person.skills.push(skill) ;

    return person ;

}

console.log (addSkill ( {name: "Ani", skills : ["HTML"] }, "CSS" ) ) ;

*/

 // task 4

/*

function countSkills (person) {

  return person.skills.length ;

}

console.log(countSkills ( {name: "Ani" , skills : ["HTML" , "CSS" , "JS" ] } ) );

*/

// task 5

/*

function  createBook (title, author, year) {
    
    return {

        title : title ,

        author : author ,

        year : year
    }

}

function bookInfo (book) {

    return book.title + " " + book.author + " " + book.year;

}

const book = createBook( "Samvel" , "Raffi" ,1886 );

console.log( bookInfo ( book ) ) ;

*/