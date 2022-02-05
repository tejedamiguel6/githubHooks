import classes from './languages.module.css'

const Langauges = ({ onUpdateLanguage, selected }) => {
  const languages = ['All', 'Java', 'JavaScript', 'Go', 'Python', 'Swift']

  return (
    <div>
      <ul className={classes.flex}>
        {languages.map((language) => {
          return (
            <li key={language} className={classes.list}>
              <button
                onClick={() => onUpdateLanguage(language)}
                style={language === selected ? { color: 'red' } : null}
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
