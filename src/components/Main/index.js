import ContentBanner from '../ContentBanner';
import SectionAbout from '../SectionAbout';
import SectionSkills from '../SectionSkills';
import SectionProjects from '../SectionProjects';
import SectionContact from '../SectionContact';

const Main = ({ darkMode }) => {
  return (
    <main>
      <ContentBanner darkMode={darkMode} />
      <SectionAbout darkMode={darkMode} />
      <SectionSkills darkMode={darkMode} />
      <SectionProjects darkMode={darkMode} />
      <SectionContact darkMode={darkMode} />
    </main>
  )
}

export default Main;