import MoviesRepository from './MoviesRepository'

export default class MockMoviesRepository extends MoviesRepository {
  constructor({detailMapper, searchMapper}) {
    super()

    this._detailMapper = detailMapper
    this._searchMapper = searchMapper
  }

  getDetail({id}) {
    const response = {
      movieName: "The Avengers: Earth's Mightiest Heroes",
      Year: '2010–2012',
      Rated: 'TV-Y7',
      Released: '22 Sep 2010',
      Runtime: '30 min',
      Genre: 'Animation, Action, Family, Sci-Fi',
      Director: 'N/A',
      Writer: 'N/A',
      Actors:
        "Eric Loomis, Colleen O'Shaughnessey, Brian Bloom, Rick D. Wasserman",
      Plot:
        "After 74 villains break out of prison, Marvel's most powerful superheroes team up to capture all of them, and also to defend the Earth from widespread threats.",
      Language: 'English',
      Country: 'USA',
      Awards: '8 nominations.',
      image:
        'https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg',
      Ratings: [{Source: 'Internet Movie Database', Value: '8.3/10'}],
      Metascore: 'N/A',
      imdbRating: '8.3',
      imdbVotes: '11,706',
      imdbID: 'tt1626038',
      Type: 'series',
      totalSeasons: '2',
      Response: 'True'
    }

    const mappedResponse = this._detailMapper.map(response)

    return Promise.resolve(mappedResponse)
  }

  getResults({query}) {
    const response = {
      Search: [
        {
          movieName: 'The Avengers',
          Year: '2012',
          imdbID: 'tt0848228',
          Type: 'movie',
          image:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'
        },
        {
          movieName: 'Avengers: Age of Ultron',
          Year: '2015',
          imdbID: 'tt2395427',
          Type: 'movie',
          image:
            'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg'
        },
        {
          movieName: 'Avengers: Infinity War',
          Year: '2018',
          imdbID: 'tt4154756',
          Type: 'movie',
          image:
            'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg'
        },
        {
          movieName: 'The Avengers',
          Year: '1998',
          imdbID: 'tt0118661',
          Type: 'movie',
          image:
            'https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'
        },
        {
          movieName: "The Avengers: Earth's Mightiest Heroes",
          Year: '2010–2012',
          imdbID: 'tt1626038',
          Type: 'series',
          image:
            'https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg'
        },
        {
          movieName: 'Ultimate Avengers',
          Year: '2006',
          imdbID: 'tt0491703',
          Type: 'movie',
          image:
            'https://m.media-amazon.com/images/M/MV5BNDFmZTkxMjktMzRiYS00YzMwLWFhZDctOTQ2N2NlOTAyZDJhXkEyXkFqcGdeQXVyNjgzNDU2ODI@._V1_SX300.jpg'
        },
        {
          movieName: 'Ultimate Avengers II',
          Year: '2006',
          imdbID: 'tt0803093',
          Type: 'movie',
          image:
            'https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'
        },
        {
          movieName: 'The Avengers',
          Year: '1961–1969',
          imdbID: 'tt0054518',
          Type: 'series',
          image:
            'https://m.media-amazon.com/images/M/MV5BZWI4ZWM4ZWQtODk1ZC00MzMxLThlZmMtOGFmMTYxZTAwYjc5XkEyXkFqcGdeQXVyMTk0MjQ3Nzk@._V1_SX300.jpg'
        },
        {
          movieName: 'Avengers Assemble',
          Year: '2013–',
          imdbID: 'tt2455546',
          Type: 'series',
          image:
            'https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg'
        },
        {
          movieName: 'Avengers Assemble',
          Year: '2013–',
          imdbID: 'tt2455546',
          Type: 'series',
          image:
            'https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg'
        }
      ],
      totalResults: '91',
      Response: 'True'
    }

    const mappedResponse = this._searchMapper.map(response)

    return Promise.resolve(mappedResponse)
  }
}
