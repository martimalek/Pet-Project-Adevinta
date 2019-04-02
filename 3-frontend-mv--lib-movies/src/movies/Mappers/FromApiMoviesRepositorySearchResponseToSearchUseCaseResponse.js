import {Mapper} from '@s-ui/domain'

export default class FromApiMoviesRepositorySearchResponseToSearchUseCaseResponse extends Mapper {
  map(apiResponse) {
    let mappedResponse = apiResponse.Search.filter(movie => {
      return Number(movie.Year.substring(0, 4)) >= Number(this._year)
    })
    return {Search: mappedResponse}
  }

  setYear(year) {
    this._year = year
    return this
  }
}
