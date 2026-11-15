function createBook (title , author , year) {

    let isAviable = true ;

   return {
     title ,
     author ,
     year , 

     changeAviable: function () {

        isAviable = !isAviable ;



     },

     getInfo : function () {

        console.log(`Title ${title} by ${author} isWritten ${year}`) ;

     }

   }

}

const book1 = createBook('Samvel' , 'Raffi' , 1971) ;
const book2 = createBook('Lrakyac Hivand' , 'Jane' , 1875) ;

book1.getInfo() ;
book2.getInfo() ;

function member (Fullname , phone) {

    return {

        Fullname ,
        phone ,
        books: [] ,

        takeBook:  function(book) {

            if (!book.isAviable) return false ;

            this.books.push(book) ;

            book.changeAviable() ;

            return true ;

        },

        returnBook: function(book) {

            const b = this.books.find(bk => bk === book) ;

            if (!b) return false ;

            this.books = this.books.filter(bk => bk !== book) ;

            book.changeAviable() ;

            return true ;

        },
 
        getInfo () {

            console.log("Member books count is :", this.books.length) ;
            this.books.forEach (b => b.getInfo()) ;

        },

    }

}

const john = member("John" , "+374576558" ) ;

john.takeBook(book1) ;

john.takeBook(book2) ;

john.getInfo() ;

function library (name) {

    return {
        name ,

        books: [] ,

        addBook(book) {

            this.books.push(book) ;

        },

        deleteBook: function (book) {
            const bk = this.books.find(b => b === book)
   
            if(!bk) return ;

           this.books.filter(b => b !== book) ;
        },

        getAviablesBooks () {

           const availableBooks = this.books.filter(b => b.isAviable) ;

          availableBooks.forEach(b => b.getInfo() ) ;

        },

    };

}

const Library  = library('web_2.5') ;

const Book3 = createBook('test', 'TestAuthor', 1000) ;

Library.addBook(Book3) ;

Library.getAviablesBooks() ;

john.returnBook(Book3) ;

console.log("===============================================================") ;

Library.getAviablesBooks() ;