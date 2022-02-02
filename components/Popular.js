import { useEffect, useState } from 'react'
import Langauges from './Languages'
import RepoGrid from './RepoGrid'
import { fetchPopularRepos } from '../utils/api'

const Popular = () => {
  const [selectedLangauge, setSelectedLangauge] = useState([])
  const [loading, setLoading] = useState(true)

  const selectedLanguage = (language) => {
    fetchPopularRepos(language).then((data) => setSelectedLangauge(data))
  }

  useEffect(() => {
    setLoading(true)
    fetchPopularRepos().then((data) => setSelectedLangauge(data))
    setLoading(false)
  }, [])

  return (
    <div>
      <Langauges
        onUpdateLanguage={selectedLanguage}
        selected={selectedLangauge}
      />
      <div>
        {loading ? <h3 style={{ textAlign: 'center' }}>LOADING</h3> : null}
      </div>

      <RepoGrid repos={selectedLangauge} />
    </div>
  )
}

export default Popular
