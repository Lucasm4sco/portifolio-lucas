import listProjects from './listProjects';
import './style.css';

const SectionProjects = ({ darkMode }) => {
  return (
    <section className={'section-projects ' + (darkMode ? 'dark-mode' : 'light-mode')}>
      <h2>Projetos</h2>
      <div className='container'>
        {listProjects.map(project => (
          <div className='card-project' key={project.legend}>
            <img src={project.img} alt={project.alt} className={project.isMobile ? 'imgMobile' : ''}/>
            <div className='about-project'>
              <h3 className='title-project'>{project.legend}</h3>
              <p className='description'>{project.description? project.description :
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ducimus voluptatibus placeat eos, quo.'}</p>
              <a href={project.link} target='_blank' rel='noreferrer' className='link-project'>Conhecer</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SectionProjects