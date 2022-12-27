import ContentBanner from '../ContentBanner';
import SectionAbout from '../SectionAbout';

const Main = ({ darkMode }) => {
  return (
    <main>
      <ContentBanner />
      <SectionAbout darkMode={darkMode} />
    </main>
  )
}

export default Main;