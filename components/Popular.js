import { useEffect, useState } from 'react'
import Langauges from './Languages'
import RepoGrid from './RepoGrid'
import { fetchPopularRepos } from '../utils/api'

const Popular = () => {
  const [repos, setRepos] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState('All')
  const [loading, setLoading] = useState(false)

  const onUpdateLanguage = async (selectedLanguage) => {
    const response = await fetchPopularRepos(selectedLanguage)
    setRepos(response)
    setSelectedLanguage(selectedLanguage)
  }

  useEffect(() => {
    setLoading(true)
    fetchPopularRepos()
    // .then((data) => setSelectedLangauge(data))
    // .then((data) => console.log('selectedLangauge ', data.language))
    setLoading(false)
  }, [repos])

  return (
    <div>
      <Langauges
        onUpdateLanguage={onUpdateLanguage}
        selected={selectedLanguage}
      />
      <div>
        {loading ? (
          <h3 style={{ textAlign: 'center', color: 'red' }}>LOADING......</h3>
        ) : (
          <RepoGrid repos={repos} />
        )}
      </div>
    </div>
  )
}

export default Popular
