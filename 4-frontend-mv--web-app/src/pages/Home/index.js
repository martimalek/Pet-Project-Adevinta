import React, {useState} from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'
import domain from '../../../../3-frontend-mv--lib-movies/src'

import Search from '../../components/Search'
import DropDown from '../../components/DropDown'
import AtomCard from '@s-ui/react-atom-card'
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'
import Badge, {atomBadgeSizes} from '@schibstedspain/sui-atom-badge'
// import AtomImage from '@s-ui/react-atom-image'

require('isomorphic-fetch')

const HomePage = ({results, router, newSubmit, newValue}) => {
  let [isDropped, setIsDropped] = useState(false)
  let [inputValue, setInputValue] = useState('')

  newSubmit = query => {
    query && router.push(`?q=${query}${inputValue ? `&y=${inputValue}` : ''}`)
  }

  newValue = value => {
    setInputValue(value)
  }

  return (
    <div className="home">
      {
        <div className="home-search">
          <i
            onClick={() => router.push('/')}
            className="fas fa-film fa-3x home-search-icon"
          />
          <Search searchSubmit={query => newSubmit(query)} />
          <i
            className={`home-search-rangeValue fas fa-chevron-${
              isDropped ? 'up' : 'down'
            } fa-2x dropped`}
            onClick={() => setIsDropped(!isDropped)}
          >
            {inputValue ? <p>{`Year: ${inputValue}`}</p> : null}
          </i>
        </div>
      }
      {isDropped && (
        <div className="home-dropdown">
          <DropDown rangeValue={value => newValue(value)} />
        </div>
      )}
      <div className="home-results">
        {results.length ? (
          results.map((movie, index) => (
            <div key={index} className="home-movie">
              <Link to={`detail/${movie.imdbID}`}>
                <div className="home-movie-card">
                  <AtomCard
                    content={() => (
                      <div className="home-movie-card-content">
                        <h2 className="home-movie-card-content-title">
                          {movie.Title}
                        </h2>
                        <div className="home-movie-card-content-container">
                          <p className="home-movie-card-content-container-text">
                            {movie.Year}
                          </p>
                          <div className="home-movie-card-content-container-badge">
                            <Badge
                              size={atomBadgeSizes.LARGE}
                              type={movie.Type === 'movie' ? 'info' : 'success'}
                              transparent
                              icon={
                                <svg viewBox="0 0 24 24">
                                  <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12C22.244 6.341 17.659 1.756 12 1.75zM20.75 12A8.75 8.75 0 1 1 12 3.25 8.76 8.76 0 0 1 20.75 12zM12 10.75a.75.75 0 0 0-.75.75v5a.75.75 0 1 0 1.5 0v-5a.75.75 0 0 0-.75-.75zm0-1.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                              }
                              label={movie.Type ? movie.Type : 'info'}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    media={() => (
                      <img
                        src={movie.Poster}
                        alt={movie.imdbID}
                        className="home-movie-card-img"
                      />
                    )}
                    vertical
                  />
                </div>
              </Link>
            </div>
          ))
        ) : (
          <h2 className="home-results-notFound">
            No items found that match that criteria
          </h2>
        )}
      </div>
    </div>
  )
}

HomePage.propTypes = {
  results: PropTypes.array,
  router: PropTypes.object,
  newSubmit: PropTypes.string,
  newValue: PropTypes.func
}

HomePage.defaultProps = {
  results: []
}

HomePage.renderLoading = () => {
  return <AtomSpinner type={AtomSpinnerTypes.FULL} />
}

HomePage.getInitialProps = ({routeInfo}) => {
  let {
    location: {query}
  } = routeInfo

  if (query.q) {
    return domain
      .get('search_movies_use_case')
      .execute({query: query.q, year: query.y ? query.y : '1950'})
      .then(({Search}) => {
        return {results: Search}
      })
      .catch(err => {
        if (err) throw err
      })
  } else {
    /* Array to "randomize" home content */
    let randomQueries = [
      'avengers',
      'super',
      'amazing',
      'incredible',
      'universe',
      'world',
      'star'
    ]
    query = randomQueries[Math.floor(Math.random() * Math.floor(7))]
    return domain
      .get('search_movies_use_case')
      .execute({query, year: '1950'})
      .then(({Search}) => {
        return {results: Search}
      })
      .catch(err => {
        if (err) throw err
      })
  }
}

export default HomePage
