import Image from 'next/image'
import classes from './repo-grid.module.css'

const RepoGrid = ({ repos }) => {
  console.log(repos, 'grab repo stuff')

  return (
    <div className={classes.FlexContainer}>
      <ul>
        {repos.map((repo) => {
          const { avatar_url, following_url, id, repos_url } = repo.owner
          const { full_name, language, name, description } = repo
          return (
            <li key={repo.id}>
              <h3>{name}</h3>
              <Image
                src={avatar_url}
                alt={repos_url}
                width={250}
                height={250}
              />

              <p>{description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RepoGrid
