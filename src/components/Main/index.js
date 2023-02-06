import ContentBanner from '../ContentBanner';
import SectionAbout from '../SectionAbout';
import SectionSkills from '../SectionSkills';
import SectionProjects from '../SectionProjects';

const Main = ({ darkMode }) => {
  return (
    <main>
      <ContentBanner />
      <SectionAbout darkMode={darkMode} />
      <SectionSkills darkMode={darkMode} />
      <SectionProjects darkMode={darkMode} />
    </main>
  )
}

export default Main;