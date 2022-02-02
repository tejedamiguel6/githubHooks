import classes from './popular.module.css'

const Langauges = ({ onUpdateLanguage, selected }) => {
  const languages = ['All', 'Java', 'JavaScript', 'Go', 'Python', 'Swift']

  return (
    <div>
      <ul className={classes.flex}>
        {languages.map((language) => {
          return (
            <li key={language} className={classes.list}>
              <button
                style={
                  language === selected ? { color: 'rgb(255,0,255)' } : null
                }
                onClick={() => onUpdateLanguage(language)}
                className={classes.button}
              >
                {language}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Langauges
