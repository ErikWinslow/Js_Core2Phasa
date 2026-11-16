function MoviesFilms (title , BillPrice , FilmGenre , raiting) {

    let playingFilm = true ;

      return {
 
         title ,
         
         BillPrice ,

         FilmGenre ,

         raiting ,

        ChangePlayingFilm () {

          playingFilm = false ;

        },

        isplayingFilm () {

          return playingFilm ;
        
        },


        getInfoFilm () {

            if (playingFilm) {

             console.log(`The Film ${title} Genre ${FilmGenre} raiting ${raiting} BilletPrice ${BillPrice}`) ; 
            
            } else {

             console.log(`Film screening ${title} hasn't started yet`)
        
            }

          },

      }


}

function FilmScreeningRoom (Film , Capacity , Occupiedseats) {

  let sumBillPrice = 0 ;

  return {

    Film , Capacity , Occupiedseats , HallInfo: [],

    GetMovieHallInfo () {       

      if (!Film.isplayingFilm()) return false ;

      this.HallInfo.push(Film)

      Film.ChangePlayingFilm() ;

      console.log (`Information about the cinema hall << ${ this.HallInfo.map(Movie => Movie.title).join(',') } >> How many seats in the hall are occupied? : ${Occupiedseats}`)
        
    },

    GetAvailbleSpots () {

      console.log (`This is how many seats are still available at each cinema : ${Capacity - Occupiedseats}`) ;

    },

    AddOccupedSeats (count) {

      if (!Number.isFinite(count) || typeof count !== "number" || count <= 0) {return false} ;
      
      if (Occupiedseats < 0) return false ;

      if (count + Occupiedseats > Capacity ) {return false} ;

      console.log (`This is how many people have joined the film. ${Occupiedseats += count}`) ;

    },

    GetSumBilletSales () {

      if (!Number.isFinite(Capacity) || typeof Capacity !== "number" || Capacity <= 0) {return false} ;

      if (Occupiedseats > Capacity) {return false}

       sumBillPrice = Occupiedseats * Film.BillPrice

       console.log (`Daily revenue at the cinema ${sumBillPrice}`) ;

    },

  }


}


const Film1 = MoviesFilms("TheWitcher" , 50 , "Dark-Fantasy" , 8) ;

const Film2 = MoviesFilms("Tokyo-Revenger" , 30 , "Drama" , 9) ;

const CinemaHall1 = FilmScreeningRoom(Film1 , 50 , 30)

const CinemaHall2 = FilmScreeningRoom(Film2 , 30 , 10)

CinemaHall1.GetMovieHallInfo(Film1) ;

console.log ("=================================================") ;

CinemaHall2.GetMovieHallInfo(Film2) ;

console.log ("=================================================") ;

CinemaHall1.GetSumBilletSales() ;

console.log ("=================================================") ;

CinemaHall2.GetSumBilletSales() ;

console.log ("=================================================") ;

Film1.getInfoFilm();

console.log ("=================================================") ;

Film2.getInfoFilm();

console.log ("=================================================") ;

CinemaHall1.GetAvailbleSpots() ;

console.log ("=================================================") ;

CinemaHall2.GetAvailbleSpots() ;

console.log ("=================================================") ;

CinemaHall2.AddOccupedSeats(5) ;
