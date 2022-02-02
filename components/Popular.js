import { useState, useEffect, Fragment } from 'react'
import classes from './popular.module.css'
import { fetchPopularRepos } from '../utils/api'

const Popular = () => {
  const [selectedLangauge, setSelectedLangauge] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchPopularRepos().then((data) => setSelectedLangauge(data))
    setLoading(false)
  }, [])

  const selectedLanguage = (language) => {
    console.log('you clicked', language)
    fetchPopularRepos(language).then((data) => setSelectedLangauge(data))
  }
  const languages = ['Java', 'JavaScript', 'Go', 'Python', 'Swift']

  return (
    <Fragment>
      <ul className={classes.flex}>
        {languages.map((language) => {
          return (
            <li key={language} className={classes.list}>
              <button
                onClick={() => selectedLanguage(language)}
                className={classes.button}
              >
                {language}
              </button>
            </li>
          )
        })}
      </ul>
      <div>
        {loading ? <h3 style={{ textAlign: 'center' }}>LOADING</h3> : null}
      </div>

      <div>{selectedLangauge && <p>{JSON.stringify(selectedLangauge)}</p>}</div>
    </Fragment>
  )
}

export default Popular
