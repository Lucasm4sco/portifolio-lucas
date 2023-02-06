import { listIconsSkills, listIconsLearning } from './listIcons'
import './style.css'

const SectionSkills = ({ darkMode }) => {
  return (
    <section className={'section-skills ' + (darkMode ? 'dark-mode' : 'light-mode')} id='skills'>
      <h2>Habilidades</h2>
      <div className="container">
        <h3>Conhecimentos</h3>
        <div className='skills'>
          {listIconsSkills.map(icon => (
            <div key={icon.legend}>
              <img src={icon.icon_img} alt={icon.alt} title={icon.legend} />
              <p>{icon.legend}</p>
            </div>
          ))}
        </div>
        <h3>Aprendendo</h3>
        <div className='skills'>
          {listIconsLearning.map(icon => (
            <div key={icon.legend}>
              <img src={icon.icon_img} alt={icon.alt} title={icon.legend} />
              <p>{icon.legend}</p>
            </div>
          ))}
        </div>

      </div>
    </section >
  )
}

export default SectionSkills