import {Mapper} from '@s-ui/domain'

export default class FromMockMoviesRepositorySearchResponseToSearchUseCaseResponse extends Mapper {
  map(mockResponse) {
    const {Search} = mockResponse
    const mockedResponse = Search.map(movie => {
      const {movieName, image, ...restOfResponse} = movie
      return {
        Title: movieName,
        Poster: image,
        ...restOfResponse
      }
    })

    return {
      Search: mockedResponse
    }
  }
}
