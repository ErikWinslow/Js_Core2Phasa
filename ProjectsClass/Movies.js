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

  let sumBillPrice = 0 , CinemaSalesBill = 0;

  return {

    Film , Capacity , Occupiedseats , HallInfo: [],

    GetMovieHallInfo () {       

      if (!Film.isplayingFilm()) return false ;

      this.HallInfo.push(Film)

      Film.ChangePlayingFilm() ;

      console.log (`Information about the cinema hall << ${ this.HallInfo.map(Movie => Movie.title).join(',') } >> How many seats in the hall are occupied? : ${Occupiedseats}`)
        
    },

    GetSumBilletSales () {

      if (!Number.isFinite(Film.BillPrice) || typeof Film.BillPrice !== "number" || Film.BillPrice <= 0) {return false} ;

      if (Occupiedseats > Capacity) {return false}

       sumBillPrice = Occupiedseats * Film.BillPrice

       CinemaSalesBill = sumBillPrice ;

       console.log (`Daily revenue at the cinema ${CinemaSalesBill}`) ;

    },

  }


}


const Film1 = MoviesFilms("TheWitcher" , 50 , "Dark-Fantasy" , 8) ;

const Film2 = MoviesFilms("Tokyo-Revenger" , 30 , "Drama" , 9) ;

const CinemaHall1 = FilmScreeningRoom(Film1 , 50 , 30)

const CinemaHall2 = FilmScreeningRoom(Film2 , 30 , 10)

CinemaHall1.GetMovieHallInfo(Film1) ;

CinemaHall2.GetMovieHallInfo(Film2) ;

CinemaHall1.GetSumBilletSales() ;

CinemaHall2.GetSumBilletSales() ;

Film1.getInfoFilm();

Film2.getInfoFilm();