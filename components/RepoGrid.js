import { useState, Fragment } from 'react'
import Image from 'next/image'
import classes from './repoGrid.module.css'

const RepoGrid = ({ repos }) => {
  const [hover, setHover] = useState(false)

  const onHover = (id) => {
    setHover(true)
  }

  const outHover = () => {
    setHover(false)
  }
  return (
    <Fragment>
      <div className={classes.FlexContainer}>
        <ul>
          {repos.map((repo) => {
            const { avatar_url, following_url, id, repos_url } = repo.owner
            const { full_name, language, name, description } = repo
            return (
              <li key={repo.id} className={classes.FlexItems}>
                <h3>{name}</h3>
                <Image
                  src={avatar_url}
                  alt={repos_url}
                  width={300}
                  height={300}
                  onMouseEnter={onHover}
                  onMouseOut={outHover}
                />
                {hover ? <p>{description}</p> : null}
              </li>
            )
          })}
        </ul>
      </div>
    </Fragment>
  )
}

export default RepoGrid
