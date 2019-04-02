import MoviesRepository from './MoviesRepository'

export default class ApiMoviesRepository extends MoviesRepository {
  constructor({fetch, config, searchMapper}) {
    super()

    this._fetch = fetch
    this._searchMapper = searchMapper
    this._config = config
  }

  getDetail({id}) {
    return this._fetch(
      `${this._config.API_ENDPOINT}${this._config.API_KEY}&i=${id}`
    ).then(res => res.json())
  }

  getResults({query, year}) {
    return this._fetch(
      `${this._config.API_ENDPOINT}${this._config.API_KEY}&s=${query}`
    )
      .then(res => res.json())
      .then(response => this._searchMapper.setYear(year).map(response))
  }
}
