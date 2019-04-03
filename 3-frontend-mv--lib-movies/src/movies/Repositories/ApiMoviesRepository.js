import MoviesRepository from './MoviesRepository'

export default class ApiMoviesRepository extends MoviesRepository {
  constructor({fetch, config, searchMapper}) {
    super()

    this._fetch = fetch
    this._searchMapper = searchMapper
    this._config = config
  }

  getDetail({id}) {
    const host = this._config.get('API_ENDPOINT')
    const apikey = this._config.get('API_KEY')

    return this._fetch(`${host}${apikey}&i=${id}`).then(res => res.json())
  }

  getResults({query, year}) {
    const host = this._config.get('API_ENDPOINT')
    const apikey = this._config.get('API_KEY')

    return this._fetch(`${host}${apikey}&s=${query}`)
      .then(res => res.json())
      .then(response => this._searchMapper.setYear(year).map(response))
  }
}
