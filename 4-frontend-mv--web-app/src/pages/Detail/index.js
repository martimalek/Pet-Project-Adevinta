import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import domain from '../../../../3-frontend-mv--lib-movies/src/index'

import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import Badge from '@schibstedspain/sui-atom-badge'
import AtomTag from '@schibstedspain/sui-atom-tag'
import Button from '@schibstedspain/sui-atom-button'
import Search from '../../components/Search/'

const DetailPage = ({movie, router}) => {
  function newSubmit(query) {
    query && router.push(`?q=${query}`)
  }

  return (
    <div className="detail">
      <div className="detail-search">
        <i
          onClick={() => router.push('/')}
          className="fas fa-film fa-3x detail-search-icon"
        />
        <Search searchSubmit={query => newSubmit(query)} />
      </div>
      <div className="detail-info">
        <h2 className="detail-info-title">{movie.Title}</h2>
        <div className="detail-info-media">
          <img className="detail-info-media-img" src={movie.Poster} />
          <div className="detail-info-media-badge">
            <Badge
              size="large"
              type="success"
              label={movie.imdbRating ? movie.imdbRating : 'movie'}
            />
          </div>
        </div>
        <div className="detail-info-content">
          <h4 className="detail-info-content-actors">
            <strong className="detail-info-content-actors-strong">
              Actors:
            </strong>
            {movie.Actors}
          </h4>
          <p className="detail-info-content-plot">{movie.Plot}</p>
          <div className="detail-info-content-genres">
            {movie.Genre.split(',').map((tag, index) => (
              <AtomTag key={index} label={tag} />
            ))}
          </div>
          <Link to="/">
            <Button type="secondary" size="large">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

DetailPage.propTypes = {
  movie: PropTypes.object,
  router: PropTypes.object
}

DetailPage.renderLoading = () => {
  return <AtomSpinner type={AtomSpinnerTypes.FULL} />
}

DetailPage.getInitialProps = ({routeInfo, context}) => {
  const {params} = routeInfo
  const {id} = params

  return domain
    .get('detail_movies_use_case')
    .execute({id})
    .then(response => {
      return {movie: response}
    })
}

export default DetailPage
